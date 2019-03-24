// Call webdriver and set up debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver Suite

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('Google Search Engine scenario', function() {

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

        it('should input text in the text search field', async function() {

            debug('fetching site');
            await driver.get('https://www.google.se');
            debug('finding element');
            let q = await driver.findElement(By.name('q'));
            debug('sending input');
            await q.sendKeys('webdriver', Key.RETURN);
            await driver.wait(
                until.titleIs('webdriver - Sök på Google'),
            1000);
            debug('done');

        });

        it('should click on link to a webdriver website and then click the Documentation tab', async function() {

            debug('clicking link first and then documentation tab on site');
            await driver.sleep(2000);
            await driver.get('https://www.seleniumhq.org/projects/webdriver');
            await driver.wait(
                until.titleIs('Selenium WebDriver'),
            1000)
            await driver.wait(
                until.elementLocated(By.xpath("//li[@id='menu_documentation']")),
                1000)
            await driver.wait(
                until.titleIs('Selenium Documentation — Selenium Documentation'), 
                1000)
            debug('done');

        });

    });

});



