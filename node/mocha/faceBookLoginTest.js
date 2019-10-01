// Call the debugger and Selenium Webdriver from library

const debug = require ('debug')('swdtest');
const {By, Key, until} = require ('selenium-webdriver');
const {suite} = require ('selenium-webdriver/testing');
const assert = require ('assert');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Facebook Login Test', async function() {

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

            // Maximize browser window here

            it('should maximize the browser window', async function() {

                debug('maximizing browser window');
                await driver.manage().window().maximize();
                debug('done');

            });

            // Fetch page

            it('should fetch the facebook page', async function() {

                debug('fetching facebook page');
                await driver.get('https://www.facebook.com');
                debug('done');

            });

            // Execute negative tests 

            it('should type a user email in the username field that is incorrect', async function() {

                debug('searching for web element for email input field');
                let userEmail = await driver.findElement(By.xpath("//input[@id='email']"));
                debug('typing email an incorrect email adress');
                await userEmail.sendKeys('christian_hall@');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the login button', async function() {

                debug('searching for web element for login btn');
                let clickLoginBtn = await driver.findElement(By.xpath("//input[@id='u_0_b']"));
                debug('clicking login btn');
                await (await clickLoginBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should show error msg on wrong user credentials', async function() {

                debug('searching for web element text');
                let errorMsg = await driver.findElement(By.tagName("#text"));
                debug('error msg present');
                await assert.ifError(errorMsg);
                driver.sleep(2000);
                debug('done');

            });

       });

       
});