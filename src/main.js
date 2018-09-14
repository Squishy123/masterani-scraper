const [cheerio, request] = [require('cheerio'), require('request-promise')]

module.exports = {
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
                        href: (e && e.slug) ? `https://www.masterani.me/anime/info/${e.slug}` : "",
                        title: (e && e.title) ? e.title : ""
                    })
                });
                return results;
            }).catch((err) => {
                return err;
            })
    }
}