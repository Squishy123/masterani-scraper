# masterani-scraper
Scraper for masterani.me

### Features
* Scrape Search Results
* Get anime metadata
* Get sources for a given episode

### Install
```
npm install masterani-scraper --save
```

### How To Use 

Use the scraper to get a list of search results based on a keyword query
```javascript
const scraper = require('masterani-scraper');

(async() => {
    let result = await scraper.getSearch(query, options);
    console.log(result)
})();

```

Use the scraper to get anime metadata
```javascript
const scraper = require('masterani-scraper');

(async() => {
    let sources = await getSearch(animeID, options);
    console.log(src)
})();

```

Use the scraper to get a list of episode sources
```javascript
const scraper = require('masterani-scraper');

(async() => {
    let sources = await getSearch(slug, episodeNumber, options);
    console.log(src)
})();

```
### License
Apache-2.0