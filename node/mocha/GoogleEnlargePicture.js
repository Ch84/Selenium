// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

        /* Set up the describe scenario within an async function and explain what
        the test scenario is */

        describe('Google Filter Function Test Scenario', async function() {

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

                // Fetch google web site and maximize browser window

                it('should fetch the google web site', async function() {

                    debug('fetching google site');
                    driver.get('https://www.google.se')
                    debug('done');

                });

                it('should maximize the browser window', async function() {

                    debug('maximizing window');
                    driver.manage().window().maximize();
                    debug('done');

                });

                // Execute tests

                it('should input Test in the text search field', async function() {

                    debug('searching for webelement txt search field');
                    let txtSearchField = await driver.findElement(By.name("q"));
                    debug('writing Test in txt search field');
                    await txtSearchField.sendKeys('Test');
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the search button', async function() {

                    debug('searching for webelement search btn');
                    let clickSearchBtn = await driver.findElement(By.name("btnK"));
                    debug('clicking on search btn');
                    await (await clickSearchBtn.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the images tab', async function() {

                    debug('searching for webelement images tab');
                    let clickImgTab = await driver.findElement(By.xpath("//a[contains(text(),'Bilder')]"));
                    debug('clicking on img tab');
                    await (await clickImgTab.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the button for tools', async function() {

                    debug('searching for webelement tools btn');
                    let clickToolsBtn = await driver.findElement(By.xpath("//a[@id='hdtb-tls']"));
                    debug('clicking on tools btn');
                    await (await clickToolsBtn.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the button for more tools', async function() {

                    debug('searching for webelement for more tools btn');
                    let clickMoreToolsBtn = await driver.findElement(By.xpath("//div[contains(text(),'Fler verktyg')]"));
                    debug('clicking more tools btn');
                    await (await clickMoreToolsBtn.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the show sizes button', async function() {

                    debug('searching for webelement show sizes btn');
                    let clickShowSizes = await driver.findElement(By.xpath("//a[contains(text(),'Visa storlekar')]"));
                    debug('clicking show sizes btn');
                    await (await clickShowSizes.click());
                    await driver.sleep(5000);
                    debug('done');

                });

                    
        });


});