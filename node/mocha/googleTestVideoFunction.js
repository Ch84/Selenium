const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

suite(async function(env) {

    describe('Google Video Function Test Scenario', async function() {

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

            it('should navigate to google web page', async function() {

                debug('navigating to web page');
                await driver.get('https://www.google.se');
                await driver.sleep(2000);
                debug('done');

            });

            it('should type test in the text search field', async function() {

                debug('searching for web element for search field');
                let inputTxtSearchField = await driver.findElement(By.xpath("//input[@name='q']"));
                debug('giving input to txt search field');
                await inputTxtSearchField.sendKeys('test');
                await driver.sleep(2000);
                debug('done')

            });

            it('should click on the search button', async function() {

                debug('searching for web element for search btn');
                let clickSearchBtn = await driver.findElement(By.name("btnK"));
                debug('clicking on search btn');
                await (await clickSearchBtn.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on the video tab function', async function() {

                debug('searching for web element for video tab');
                let clickVideoTab = await driver.findElement(By.xpath("//a[contains(text(),'Videor')]"));
                debug('clicking on video tab');
                await (await clickVideoTab.click());
                await driver.sleep(2000);
                debug('done');

            });

            it('should click on a video link', async function() {

                debug('searching for web element for video link');
                let clickVideoLink = await driver.findElement(By.className("LC20lb"));
                debug('clicking on video link');
                await (await clickVideoLink.click());
                await driver.sleep(2000);
                debug('done');

            });

    });


});