const { expect } = require('chai');

//load module
const scraper = require('../src/main.js');

describe('Get Search Results Tests', () => {
    it('Test 1: Search results given keyword, "Dragon Ball Super"', () => {
        return scraper.getSearch('Dragon Ball Super', {}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    }),
    it('Test 2: Search results given keyword, "One Punch Man"', () => {
        return scraper.getSearch('One Punch Man', {}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    })
    it('Test 3: Search results given keyword, "Neon Genesis Evangelion" using a proxy', () => {
        return scraper.getSearch('Neon Genesis Evangelion', {proxy: process.env.proxy}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    })
})

