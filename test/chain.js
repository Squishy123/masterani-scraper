const { expect } = require('chai');

//load module
const scraper = require('../src/main.js');

describe('Chain all methods to attain source list', () => {
    it('Test 1: Source of Dragon Ball Super episode 123 from search', async () => {

        let search = await scraper.getSearch("Dragon Ball Super", {});
        let src = await scraper.getSources(search[0].slug, 123);
        console.log(src);

        return expect(src.length).to.be.gt(0);
    })
})

