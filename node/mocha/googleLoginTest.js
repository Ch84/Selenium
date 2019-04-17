// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Google Login Test Scenario', async function() {

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

            // Fetch google web page

            it('should fetch the Google Web Page', async function() {
                
                debug('fetching google site');
                await driver.get('https://www.google.se/?gws_rd=ssl');
                debug('done');

            });

            // Maximize browser window

            it('should maximize the browser window', async function() {

                debug('maximized the window');
                await driver.manage().window().maximize();
                debug('done');

            });

            // Execute tests

            it('should press the login button', async function() {

                debug('searching for the web element for btn');
                let clickLoginBtn = await driver.findElement(By.xpath("//a[@class='gb_5d gb_1 gb_kb']"));
                debug('pressed the login btn');
                await (await clickLoginBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should input the email adress into the username field', async function() {

                debug('searching for the web element for the field');
                let inputEmail = await driver.findElement(By.xpath("//input[@name='identifier']"));
                debug('sent email input');
                await inputEmail.sendKeys('ch7751@gmail.com');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the next button', async function() {

                debug('searching for the web element for the next btn');
                let clickNextBtn = await driver.findElement(By.xpath("//div[@id='identifierNext']"));
                debug('clicked next btn');
                await (await clickNextBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should input password into the password field', async function() {

                debug('searching for the web element for the pwd field');
                let inputPassword = await driver.findElement(By.xpath("//input[@name='password']"));
                debug('sent password input');
                await inputPassword.sendKeys('Gayatrikashunika');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the next button', async function() {

                debug('searching for the web element for next btn');
                let clickNextBtnPwd = await driver.findElement(By.xpath("//div[@id='passwordNext']"));
                debug('clicked next btn');
                await (await clickNextBtnPwd.click());
                await driver.sleep(5000);
                debug('done');

            });

       });

});
