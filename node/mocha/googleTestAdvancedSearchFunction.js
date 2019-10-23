const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

suite(async function(env) {

        describe('Google Advanced Search Function Test Scenario', async function() {

                let driver;

                before(async function() {

                    debug('driver setup');
                    driver = await env.builder().build();
                    debug('done');

                });

                after(function() {

                    debug('driver teardown');
                    driver.quit();
                    driver = null;
                    debug('done');

                });

                it('should maximize the browser window', async function() {

                    debug('maximizing window');
                    await driver.manage().window().maximize();
                    debug('done');

                });

                it('should navigate to the Google web page', async function() {

                    debug('navigating to google web page');
                    await driver.get('https://www.google.se');
                    debug('done');

                });

                it('should type webdriver in the text search field', async function() {

                    debug('searching for web element for search field');
                    let inputTxt = await driver.findElement(By.xpath("//input[@name='q']"));
                    debug('giving input webdriver');
                    await inputTxt.sendKeys('webdriver');
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should press the search button', async function() {

                    debug('searcing for web element for search btn');
                    let clickSearchBtn = await driver.findElement(By.name("btnK"));
                    debug('clicking search btn');
                    await (await clickSearchBtn.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should press the settings filter function', async function() {

                    debug('searching for web element for advanced settings');
                    let clickAdvancedSetting = await driver.findElement(By.xpath("//a[@id='abar_button_opt']"));
                    debug('clicking advanced settings');
                    await (await clickAdvancedSetting.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should click on the advanced settings function', async function() {

                    debug('searching for web element for advanced settings');
                    let clickAdvancedSettings = await driver.findElement(By.linkText("Avancerad sökning"));
                    debug('clicking advanced settings');
                    await (await clickAdvancedSettings.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should delete webdriver in the field for all following words', async function() {

                    debug('searching for the field for all following words');
                    let deleteFollowingWordsField = await driver.findElement(By.xpath("//input[@id='xX4UFf']"));
                    debug('deleting input webdriver');
                    await deleteFollowingWordsField.sendKeys(Key.DELETE);

                });

        });



});
