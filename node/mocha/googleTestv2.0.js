// Call webdriver and set up the debugger
const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver suite environment

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('Google Test Web Page Scenario', async function() {

        // Create variable driver and declare it

        let driver;

        // Set up the debugger for driver before execution of tests

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();

        });

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;

        });

        // Execute async automation tests

        it('should maximize the browser window', async function() {

            debug('maximized the browser window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('should fetch the Google Web Page', async function() {

            debug('fetching Google web page');
            await driver.get('https://www.google.se');
            debug('done');

        });

        it('should input text in the text search field', async function() {

            debug('searching for webelement for text search field');
            let inputTxtSearchField = await driver.findElement(By.name('q'));
            debug('sent keys');
            inputTxtSearchField.sendKeys('webdriver');
            await driver.sleep(2000);
            debug('done');

        });

        it('should click the search button', async function() {

            debug('searching for webelement for search btn');
            let clickSearchBtn = driver.findElement(By.name('btnK'));
            debug('clicked search btn');
            await (await clickSearchBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should now click on the tools button', async function() {

            debug('searching for webelement for tools btn');
            let clickSearchLink = await driver.findElement(By.xpath("//a[@id='hdtb-tls']"));
            debug('clicked the tools btn');
            await (await clickSearchLink.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the down arrow for choosing countries', async function() {

            debug('searching for webelement for down arrow btn');
            let clickDownArrowBtn = await driver.findElement(By.xpath("//div[@id='hdtbMenus']//div[2]//span[1]"));
            debug('clicked down arrow btn');
            await (await clickDownArrowBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on a country', async function() {

            debug('searching for webelement for country select');
            let clickCountryBtn = await driver.findElement(By.xpath("//li[@id='ctr_countrySE']"));
            debug('clicked the country btn');
            await (await clickCountryBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the down arrow button for selecting a language', async function() {

            debug('searching for webelement for down arrow btn');
            let clickDownArrowBtn2 = await driver.findElement(By.xpath("//div[@jscontroller='qik19b']//div[3]//span[1]"));
            debug('clicked the down arrow btn');
            await (await clickDownArrowBtn2.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the selected language', async function() {

            debug('searching for webelement for the current language');
            let clickLangBtn = await driver.findElement(By.xpath("//a[contains(text(),'Sidor skrivna på svenska')]"));
            debug('clicked lang btn');
            await (await clickLangBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the down arrow button for selecting a time period', async function() {

            debug('searching for webelement for down arrow btn');
            let clickDownArrowBtn3 = await driver.findElement(By.xpath("//div[@jscontroller='qik19b']//div[4]//span[1]"));
            debug('clicked down arrow btn');
            await (await clickDownArrowBtn3.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the latest hour button', async function() {

            debug('searching for webelement for the latest hour btn');
            let clickLatestHourBtn = await driver.findElement(By.xpath("//a[contains(text(),'Senaste timmen')]"));
            debug('clicked the latest hour btn');
            await (await clickLatestHourBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the sorted after relevans button', async function() {

            debug('searching for webelement for the sorted after relevans button');
            let SortRelevansBtn = await driver.findElement(By.xpath("//div[contains(text(),'Sorterat efter relevans')]"));
            debug('clicked sorted after relevans btn');
            await (await SortRelevansBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

        it('should click on the sorted after date button', async function() {

            debug('searching for the webelement for the sorted after date btn');
            let clickSortedDateBtn = await driver.findElement(By.xpath("//a[contains(text(),'Sorterat efter datum')]"));
            debug('clicked sorted after date btn');
            await (await clickSortedDateBtn.click());
            await driver.sleep(2000);
            debug('done');

        });

    });

});