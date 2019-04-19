// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Gmail Functions Test Scenario', async function() {

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

            // Fetch Google Web Page

            it('should fetch the google web page', async function() {

                debug('fetching google web page');
                await driver.get('https://www.google.se');
                debug('done');

            });

            // Maximize the browser window

            it('should maximize the browser window', async function() {

                debug('maximizing browser window');
                driver.manage().window().maximize();
                debug('done');

            });

            // Execute tests

            it('should click on the log in button to google account', async function() {

                debug('searching for webelement for log in btn');
                let clickLoginBtn = await driver.findElement(By.xpath("//a[@id='gb_70']"));
                debug('clicked log in btn');
                await (await clickLoginBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should input email adress in the user name field', async function() {

                debug('searching for webelement for user name field');
                let inputEmail = await driver.findElement(By.xpath("//input[@id='identifierId']"));
                debug('gave input to user name field');
                await inputEmail.sendKeys('ch7751@gmail.com');
                await driver.sleep(2000);

            });

            it('should click on the next button', async function() {

                debug('searching for webelement for next btn');
                let clickNextBtn = await driver.findElement(By.xpath("//content[@class='CwaK9']"));
                debug('clicked next btn');
                await (await clickNextBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should give input to the password field', async function() {

                debug('searching for webelement for pwd field');
                let inputPwd = await driver.findElement(By.xpath("//input[@name='password']"));
                debug('gave input to pwd field');
                await inputPwd.sendKeys('Gayatrikashunika');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the next button', async function() {

                debug('searching webelement for next btn');
                let clickSecondNextBtn = await driver.findElement(By.xpath("//div[@id='passwordNext']//content[@class='CwaK9']"));
                debug('clicked next btn');
                await (await clickSecondNextBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the gmail link', async function() {

                debug('searching for webelement for gmail link');
                let clickGmailLink = await driver.findElement(By.xpath("//a[contains(text(),'Gmail')]"));
                debug('clicked gmail link');
                await (await clickGmailLink.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the user for chat interaction', async function() {

                debug('searching for webelement for chat interaction');
                let chat = await driver.findElement(By.xpath("//a[@title='Skickat']"));
                debug('clicked user name for chat');
                await (await chat.click());
                await driver.sleep(5000);
                debug('done');

            });

       });

});