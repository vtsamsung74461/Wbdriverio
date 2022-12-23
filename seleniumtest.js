const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

var assert = require('assert');
var mocha = require ('mocha');
describe('My Search application', () => {
    it('should search with count of  records', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await  browser.reloadSession()
        await driver.navigateTo('');
        await driver.$('.gLFyf');
        await driver.$('.gNO89b').click();
        await driver.$$('.LC20lb MBeuO DKV0Md').countresult();
        assert.equal(15);
       
    })
})


