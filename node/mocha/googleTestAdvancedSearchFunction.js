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
                    await deleteFollowingWordsField.sendKeys(Key.CONTROL, 'a');
                    await deleteFollowingWordsField.sendKeys(Key.DELETE);
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should type webdriver in the field for all following words', async function() {

                    debug('searching for the field for all following words');
                    let inputFollowingWordsField = await driver.findElement(By.xpath("//input[@id='xX4UFf']"));
                    debug('giving input webdriver');
                    await inputFollowingWordsField.sendKeys("webdriver");
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should type web in the field for exact word or phrase', async function() {

                    debug('searching for the field for exact word or phrase');
                    let inputExactWordOrPhrase = await driver.findElement(By.xpath("//input[@id='CwYCWc']"));
                    debug('giving input webdriver');
                    await inputExactWordOrPhrase.sendKeys("webdriver");
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should type in the field for something of the following word', async function() {

                    debug('searching for field for input something of the following word');
                    let inputSomeWord = await driver.findElement(By.xpath("//input[@id='mSoczb']"));
                    debug('giving input web');
                    await inputSomeWord.sendKeys("web");
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should type in the field for nothing of the following words', async function() {

                    debug('searching for field for input nothing of the following words');
                    let inputNothingOfTheFollowingWords = await driver.findElement(By.xpath("//input[@id='t2dX1c']"));
                    debug('giving input test');
                    await inputNothingOfTheFollowingWords.sendKeys("test");
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should type a number between 0 - 9 in the number fields', async function() {

                    debug('searching for number fields');
                    let numberField0 = await driver.findElement(By.xpath("//input[@id='LK5akc']"));
                    let numberField1 = await driver.findElement(By.xpath("//input[@name='as_nhi']"));
                    debug('giving input 0 - 9');
                    await numberField0.sendKeys("0");
                    await numberField1.sendKeys("9");
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should choose a language in the language menu', async function() {

                    debug('searching for webelement for lang menu');
                    let chooseLang = await driver.findElement(By.xpath("//div[@id='lr_button']"));
                    let chooseKoreanLang = await driver.findElement(By.xpath("//div[contains(text(),'koreanska')]"));
                    debug('choosing language');
                    await (await chooseLang.click());
                    await (await chooseKoreanLang.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should choose a region in the region menu', async function() {

                    debug('searching for webelement for region');
                    let chooseRegion = await driver.findElement(By.xpath("//div[@id='cr_button']"));
                    let chooseRegionSriLanka = await driver.findElement(By.xpath("//div[contains(text(),'Sri Lanka')]"));
                    debug('choosing region');
                    await (await chooseRegion.click());
                    await (await chooseRegionSriLanka.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should choose when the information last was updated', async function() {

                    debug('searching for webelement for info update');
                    let chooseLatestUpdate = await driver.findElement(By.xpath("//div[@id='as_qdr_button']"));
                    let chooseLastYear = await driver.findElement(By.xpath("//div[contains(text(),'senaste året')]"));
                    debug('choosing latest info update');
                    await (await chooseLatestUpdate.click());
                    await (await chooseLastYear.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should choose a term in the menu for terms to show', async function() {

                    debug('searching for webelement for terms menu');
                    let chooseTerm = await driver.findElement(By.xpath("//div[@id='as_occt_button']"));
                    let choosTermLinksToPage = await driver.findElement(By.xpath("//div[contains(text(),'i länkar till sidan')]"));
                    debug('choosing a term');
                    await (await chooseTerm.click());
                    await (await choosTermLinksToPage.click());
                    await driver.sleep(2000);
                    debug('done');

                });

                it('should choose format in the filetype menu', async function() {

                    debug('searching for webelement for filetype menu');
                    let chooseFileType = await driver.findElement(By.xpath("//div[@id='as_filetype_button']"));
                    let chooseFileFormat = await driver.findElement(By.xpath("//div[contains(text(),'Adobe Acrobat PDF (. pdf)')]"));
                    debug('choosing filetype format');
                    await (await chooseFileType.click());
                    await (await chooseFileFormat.click());
                    await driver.sleep(2000);
                    debug('done');

                });

        });

});
