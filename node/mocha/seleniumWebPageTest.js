// Call webdriver and set up debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver Suite

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('Selenium Webdriver Test Page Scenario', async function() {

        let driver;

        // Set up the debugger for driver before execution of tests

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();

        });

        // Close the browser after execution is complete

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;

        });

        // Execute tests

        it('should maximize the browser window', async function() {
            
            debug('maximizing window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('it should fetch the test site', async function() {

            debug('fetching site');
            driver.get('https://www.seleniumhq.org');
            debug('done');

        });

        it('should find and click the element', async function() {

            debug('found and clicked the element');
            await driver.sleep(5000);
            let el = await driver.findElement(By.xpath("//a[@title='Technical references and guides']"));
            debug('click element');
            await el.sendKeys(Key.TAB);
            await el.sendKeys(Key.RETURN);
            debug('done');

        });

    });

});