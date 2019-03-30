// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Google Test Filter Functions Scenario', async function() {

            // Create the variable driver and declare it

            let driver;

            // Before execution of tests create async function here

            before(async function() {

                /* Set up the debugger with the driver here and use the driver variable to build the environment
                with the parameter env and with the await command */

                debug('driver setup');
                driver = await env.builder().build();

            });

            // After execution close the browser within a normal function here

            after(function() {

                /* Set up the debugger here to teardown the driver
                   and use the driver quit command and use driver 
                   variable to set to null */

                   debug('driver teardown');
                   driver.quit();
                   driver = null;

            });

            // Maximize the browser window

            it('should maximize the browser window', async function() {

                debug('maximized the browser window');
                await driver.manage().window().maximize();
                debug('done');
            
            });

            // Begin executon of tests here

            it('should fetch the google web page', async function() {

                debug('fetched the site');
                await driver.get('https://www.google.se');
                await driver.sleep(2000);
                debug('done');

            });

            it('should input webdriver in the text search field', async function() {

                debug('searching for the webelement for the text search field');
                let inputTxtSearchField = await driver.findElement(By.name('q'));
                debug('sent input webdriver');
                await inputTxtSearchField.sendKeys('webdriver');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the search button', async function() {

                debug('searching for the webelement for the search btn');
                let clickSearchBtn = await driver.findElement(By.name('btnK'));
                debug('clicked the search btn');
                await (await clickSearchBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

       });

});