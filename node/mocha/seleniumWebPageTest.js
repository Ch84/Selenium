// Call webdriver and set up debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver Suite

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('Selenium Webdriver Test Page Scenario', async function() {

        let driver;

        // Set up the debugger for driver before execution of tests

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();

        });

        // Close the browser after execution is complete

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;

        });

        // Execute tests

        it('should maximize the browser window', async function() {
            
            debug('maximizing window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('it should fetch the test site', async function() {

            debug('fetching site');
            driver.get('https://www.seleniumhq.org');
            debug('done');

        });

        it('should find and click the element', async function() {

            debug('found the element');
            await driver.sleep(5000);
            let clickDocumentationTab = await driver.findElement(By.xpath("//a[@title='Technical references and guides']"));
            debug('clicked the element');
            await clickDocumentationTab.sendKeys(Key.TAB);
            await clickDocumentationTab.sendKeys(Key.RETURN);
            debug('done');

        });

        it('should find and click on link', async function() {

            debug('found the link');
            await driver.sleep(5000);
            let clickLink = await driver.findElement(By.css('a.reference.internal'));
            debug('clicked the link');
            await clickLink.sendKeys(Key.TAB);
            await clickLink.sendKeys(Key.RETURN);
            debug('done');

        });

        it('should find and click the element csharp label', async function() {

            debug('found the element csharp label');
            await driver.sleep(5000);
            let clickLabel = await driver.findElement(By.xpath("//input[@value='csharp']"));    
            debug('clicked the csharp label');
            await clickLabel.sendKeys(Key.TAB);
            await clickLabel.sendKeys(Key.RETURN);
            debug('done');

        });

        it('should find and click the issue link', async function() {

            debug('found the issue link');
            await driver.sleep(5000);
            let clickIssueLink = await driver.findElement(By.xpath("//a[@class='reference external']"));
            debug('clicked the issue link');
            await clickIssueLink.sendKeys(Key.TAB);
            await clickIssueLink.sendKeys(Key.RETURN);
            debug('done');

        });

    });

});