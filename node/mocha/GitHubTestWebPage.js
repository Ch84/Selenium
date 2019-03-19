// Call webdriver and set up the debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver suite

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('GitHub Test Web Page Scenario', async function() {

        // Create variable driver and declare it

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

        // Maximize the browser window and get the web page, execute tests

        it('should maximize the browser window', async function() {

            debug('maximixing window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('should fetch the web page', async function() {

            debug('fetching web page');
            await driver.get('https://github.com');
            debug('done');

        });

        it('should click the sign in button', async function() {

            debug('clicking the sign in button');
            await driver.sleep(2000);
            let clickLogInBtn = await driver.findElement(By.css('a.HeaderMenu-link.no-underline.mr-3:nth-child(2)'));
            await clickLogInBtn.sendKeys(Key.TAB);
            await clickLogInBtn.sendKeys(Key.RETURN);
            debug('done');

        });

        it('should input the user credentials', async function() {

            debug('sending input');
            await driver.sleep(2000);
            let inputUserName = await driver.findElement(By.xpath("//input[@id='login_field']"));
            let inputPassword = await driver.findElement(By.xpath("//input[@id='password']"));
            await inputUserName.sendKeys('CH84');
            await inputPassword.sendKeys('Gayathri1991');
            debug('done');

        });

        it('should click the sign in button', async function() {

            debug('clicking sign in button');
            await driver.sleep(2000);
            let signInBtn = driver.findElement(By.xpath("//input[@value='Sign in']"));
            await signInBtn.sendKeys(Key.TAB);
            await signInBtn.sendKeys(Key.RETURN);
            debug('done');

        });

        it('should give input in the Repositories text search field and press the Selenium link', async function() {

            debug('finding element');
            await driver.sleep(2000);
            let inputSearchText = await driver.findElement(By.xpath("//input[@id='dashboard-repos-filter-left']"));
            debug('sending input and clicking the ch84/selenium link');
            await inputSearchText.sendKeys('CH84/Selenium', Key.TAB, Key.RETURN);
            await driver.wait(
                until.titleIs('Ch84/Selenium'),
                1000);            
            debug('done');

        });

    });

});