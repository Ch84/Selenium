// Call webdriver and set up debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver Suite

suite(function(env) {

    // Mocha BDD

    describe('Google Search Engine scenario', function() {

        let driver;

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();

        });

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;

        });

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

        it('should click on link to a webdriver website', async function() {

            debug('clicking link');
            await driver.get('https://www.seleniumhq.org/projects/webdriver');
            await driver.wait(
                until.titleIs('Selenium WebDriver'),
            1000)

        });

    });

});



