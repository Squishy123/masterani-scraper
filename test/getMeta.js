const { expect } = require('chai');

//load module
const scraper = require('../src/main.js');

describe('Get Meta Results Tests', () => {
    it('Test 1: Search results given ID for Dragon Ball Super', () => {
        return scraper.getMeta(1429, {}).then((res) => {
            console.log(res);
            expect(res.episodes.length).to.be.gt(0);
        })
    }),
    it('Test 2: Search results given ID for One Punch Man', () => {
        return scraper.getMeta(1268, {}).then((res) => {
            console.log(res);
            expect(res.episodes.length).to.be.gt(0);
        })
    }),
    it('Test 3: Search results given ID for Dragon Ball Super using a proxy', () => {
        return scraper.getMeta(1429, {proxy: process.env.proxy}).then((res) => {
            console.log(res);
            expect(res.episodes.length).to.be.gt(0);
        })
    })
})

