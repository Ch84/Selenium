// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Messenger Functions Test Scenario', async function() {

            // Create the variable driver and declare it

            let driver;

            // Before execution of tests create async function here

            before(async function() {

                /* Set up the debugger with the driver here and use the driver variable to build the environment
                with the parameter env and with the await command */

                debug('driver setup');
                driver = await env.builder().build()

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

            it('should fetch the messenger site', async function() {

                debug('fetching messenger site');
                await driver.get('https://www.messenger.com');
                debug('done');

            });

            it('should maximize the browser window', async function() {

                debug('maximizing browser window');
                await driver.manage().window().maximize();
                debug('done');

            });

            it('should input email adress in the user name field', async function() {

                debug('searching for webelement for user name field');
                let inputEmail = await driver.findElement(By.xpath("//input[@placeholder='E-postadress eller telefonnummer']"));
                debug('gave email input to user name field');
                await inputEmail.sendKeys('christian_hall@hotmail.com');
                await driver.sleep(2000);
                debug('done');

            });


       });


});