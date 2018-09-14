const { expect } = require('chai');

//load module
const scraper = require('../src/main.js');

describe('Get Sources Tests', () => {
    it('Test 1: Source of Dragon Ball Super episode 123', () => {
        return scraper.getSources("1429-dragon-ball-super", 123, {}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    }),
    it('Test 2: Source of One Punch Man episode 7', () => {
        return scraper.getSources("1268-one-punch-man", 7, {}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    }),
    it('Test 3: Source of Dragon Ball Super episode 123 using a proxy', () => {
        return scraper.getSources("1429-dragon-ball-super", 123, {proxy: process.env.proxy}).then((res) => {
            console.log(res);
            expect(res.length).to.be.gt(0);
        })
    })

})

