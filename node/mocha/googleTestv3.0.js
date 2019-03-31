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

            it('should click on the button for tools', async function() {

                debug('searching for the webelement for the tools btn');
                let clickToolsBtn = await driver.findElement(By.xpath("//a[@id='hdtb-tls']"));
                debug('clicked the tools btn');
                await (await clickToolsBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the filter function for anytime', async function() {

                debug('searching for the webelement for filter function anytime');
                let clickFilterAnytime = await driver.findElement(By.xpath("//div[contains(text(),'När som helst')]"));
                debug('clicked the anytime filter');
                await (await clickFilterAnytime.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should select the adapted period choice in dropdown menu', async function() {

                debug('searching for the webelement for the adapted period choice');
                let clickAdaptedPeriod = await driver.findElement(By.xpath("//span[@class='q']"));
                debug('clicked on the adapted period choice');
                await (await clickAdaptedPeriod.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should input a date in the first text box', async function() {

                debug('searching for the webelement for the first input box');
                let inputFirstDateBox = await driver.findElement(By.xpath("//input[@id='cdr_min']"));
                debug('sent date input');
                await inputFirstDateBox.sendKeys('2019-04-01');
                await driver.sleep(2000);
                debug('done');

            });

            it('should input a date in the second text box', async function() {

                debug('searchin for the webelement for the second input box');
                let inputSecondDateBox = await driver.findElement(By.xpath("//body[@class='srp tbo vasq']/div/div[contains(@class,'mdm')]/div/div[@class='cdr_cont']/div[@class='cdr_dlg']/div[@class='cdr_sft']/form[@class='cdr_frm']/input[6]"));
                debug('sent date input');
                await inputSecondDateBox.sendKeys('2019-04-30');
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the submit button', async function() {

                debug('searching for the webelement for the submit btn');
                let clickSubmitBtn = await driver.findElement(By.xpath("//form[@id='cdr_frm']//input[@value='Kör']"));
                debug('clicked the submit btn');
                await (await clickSubmitBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the restore button', async function() {

                debug('searching for the webelement for the restore btn');
                let clickRestoreBtn = await driver.findElement(By.xpath("//div[@id='hdtb-rst']"));
                debug('clicked the restore btn');
                await (await clickRestoreBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

       });

});