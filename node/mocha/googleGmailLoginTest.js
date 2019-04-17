// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Google Gmail Login Test Scenario', async function() {

            // Create the variable driver and declare it

            let driver;

            // Before execution of tests create async function here

            before(async function() {

            /* Set up the debugger with the driver here and use the driver variable to build the environment
            with the parameter env and with the await command */

            debug('driver setup');
            driver = await env.builder().build();

            });

            after(function() {

                // After execution close the browser within a normal function here

                debug('driver teardown');
                driver.quit();
                driver = null;

            });

            // Fetch the google site

            it('should fetch the Google site', async function() {

                debug('fetching google site');
                await driver.get('https://www.google.se/?gws_rd=ssl');
                debug('done');

            });

            // Maximize the browser window

            it('should maximize the browser window', async function() {

                debug('maximising browser window');
                await driver.manage().window().maximize();
                debug('done');

            });

            it('should click on the Gmail link', async function() {

                debug('searching for the web element for gmail link');
                let clickGmailLink = await driver.findElement(By.xpath("//a[contains(text(),'Gmail')]"));
                debug('clicked gmail link');
                await (await clickGmailLink.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the Log In link', async function() {

                debug('searching for webelement for log in link');
                let clickLoginLink = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div[5]/ul[1]/li[2]/a"));
                debug('clicked log in link');
                await (await clickLoginLink.click());
                await driver.sleep(2000);
                debug('done');

            });

       });

});