// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Google Test Scenario - Filter function line drawing', async function() {

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

            it('should fetch the Google Web Page', async function() {

                debug('fetching google site');
                driver.get('https://www.google.se/?gws_rd=ssl');
                debug('done');

            });

            it('should maximize the browser window', async function() {

                debug('maximizing browser window');
                driver.manage().window().maximize();
                debug('done');

            });

            it('should type in Hand in the text search field', async function() {

                debug('searching for the element for text search field');
                let txtSearchField = driver.findElement(By.name('q'));
                debug('typing Hand in text search field');
                await txtSearchField.sendKeys('Hand', Key.ENTER);
                await driver.wait(until.titleIs('Hand - Sök på Google'), 1000);
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on Images tab', async function() {

                debug('searching for element for images');
                let clickImgTab = driver.findElement(By.xpath("//a[contains(text(),'Bilder')]"));
                debug('clicking on Images tab');
                await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Bilder')]")), 1000);
                await (await clickImgTab.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the button for tools', async function() {

                debug('searching for element for tools btn');
                let clickToolsBtn = await driver.findElement(By.xpath("//a[@id='hdtb-tls']"));
                debug('clicking on the tools btn');
                await driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")), 1000);
                await (await clickToolsBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the filter function type of image', async function() {

                debug('searching for element for type of img');
                let clickTypeOfImg = await driver.findElement(By.xpath("//div[contains(text(),'Typ av bild')]"));
                debug('clicking on type of img');
                await driver.wait(until.elementLocated(By.xpath("//div[contains(text(),'Typ av bild')]")), 1000);
                await (await clickTypeOfImg.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should choose the option for line drawing', async function() {

                debug('searching for element for line drawing');
                let chooseLineDrawing = await driver.findElement(By.xpath("//a[contains(text(),'Linjeteckning')]"));
                debug('clicking on line drawing');
                await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Linjeteckning')]")), 1000);
                await (await chooseLineDrawing.click());
                await driver.sleep(2000);
                debug('done');

            });

       });

});