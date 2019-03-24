// Call webdriver and set up the debugger
const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver suite environment

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('Google Test Web Page Scenario', async function() {

        // Create variable driver and declare it

        let driver;

        // Set up the debugger for driver before execution of tests

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();

        });

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;

        });

        // Execute async automation tests

        it('should maximize the browser window', async function() {

            debug('maximized the browser window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('should fetch the Google Web Page', async function() {

            debug('fetching Google web page');
            await driver.get('https://www.google.se');
            debug('done');

        });

        it('should input text in the text search field', async function() {

            debug('searching for webelement for text search field');
            let inputTxtSearchField = await driver.findElement(By.name('q'));
            debug('sent keys');
            inputTxtSearchField.sendKeys('webdriver');
            await driver.sleep(2000);
            debug('done');

        });

        it('should click the search button', async function() {

            debug('searching for webelement for search btn');
            let clickSearchBtn = driver.findElement(By.name('btnK'));
            debug('clicked search btn');
            await (await clickSearchBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should now click on the tools button', async function() {

            debug('searching for webelement for tools btn');
            let clickSearchLink = await driver.findElement(By.xpath("//a[@id='hdtb-tls']"));
            debug('clicked the tools btn');
            await (await clickSearchLink.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the down arrow for choosing countries', async function() {

            debug('searching for webelement for down arrow btn');
            let clickDownArrowBtn = await driver.findElement(By.xpath("//div[@id='hdtbMenus']//div[2]//span[1]"));
            debug('clicked down arrow btn');
            await (await clickDownArrowBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on a country', async function() {

            debug('searching for webelement for country select');
            let clickCountryBtn = await driver.findElement(By.xpath("//li[@id='ctr_countrySE']"));
            debug('clicked the country btn');
            await (await clickCountryBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

    });

});