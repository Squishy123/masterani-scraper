const [cheerio, request] = [require('cheerio'), require('request-promise')]

module.exports = {
    /**
     * Returns the search results of a given keyword
     * @param keyword 
     */
    getSearch: async function (keyword, options) {
        return await request(Object.assign({
            json: true, uri: `https://www.masterani.me/api/anime/search?search=${keyword}&sb=true`, headers: {
                'User-Agent': 'Request-Promise'
            },
        }, options))
            .then((body) => {
                let results = [];
                body.forEach(e => {
                    results.push({
                        poster: (e && e.poster) ? `https://cdn.masterani.me/poster/1/${e.poster.file}` : "",
                        episodesListHref: (e && e.slug) ? `https://www.masterani.me/anime/info/${e.slug}` : "",
                        title: (e && e.title) ? e.title : "",
                        slug: (e && e.slug) ? e.slug : "",
                        id: (e && e.id) ? e.id : ""
                    })
                });
                return results;
            }).catch((err) => {
                return err;
            })
    },
    /**
     * Returns detailed metadata of an anime given it's ID
     * @param animeID
     */
    getMeta: async function (animeID, options) {
        return await request(Object.assign({
            json: true, uri: `https://www.masterani.me/api/anime/${animeID}/detailed`, headers: {
                'User-Agent': 'Request-Promise'
            },
        }, options))
            .then((body) => {
                if (!body) throw `No Anime with ID: ${animeID} Found`
                return body;
            }).catch((err) => {
                return err;
            })
    },
    /**
     * Return the source embeddables of an anime, given it's slug and episode number
     */
    getSources: async function (animeSlug, episodeNumber, options) {
        return await request(Object.assign({
            uri: `https://www.masterani.me/anime/watch/${animeSlug}/${episodeNumber}`,
            transform: (body) => { return cheerio.load(body) }
        }, options))
            .then(($) => {
                let sources = [], mirrors = JSON.parse($('video-mirrors').attr(':mirrors'));
                mirrors.forEach((e) => {
                    //cases for openload cause prefix throws a 401
                    let src = (e.host_id == 15) ? `https://openload.co/embed/${e.embed_id}${(e.host.embed_suffix) ? e.host.embed_suffix : ""}` : `${e.host.embed_prefix}${e.embed_id}${(e.host.embed_suffix) ? e.host.embed_suffix : ""}`
                    sources.push({ hostID: e.host_id, quality: e.quality, src: src })
                })
                return sources;
            }).catch((err) => {
                return err;
            })
    }
}