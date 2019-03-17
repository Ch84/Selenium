// Call webdriver and set up the debugger

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up Selenium Webdriver suite

suite(function(env) {

    // Mocha BDD and set up describe scenario

    describe('GitHub Log In Test Scenario', async function() {

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

        // Execute tests

        it('should maximize the browser window', async function() {

            debug('maximizing browser window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('should fetch the web page', async function() {

            debug('fetching the web page');
            await driver.get('https://github.com');
            debug('done');

        });

        it('should find and click the sign in button', async function() {

            debug('finding the sign in button');
            await driver.sleep(5000);
            let clickSignInBtn = await driver.findElement(By.css('a.HeaderMenu-link.no-underline.mr-3:nth-child(2)'));
            debug('clicking the sign in button');
            await clickSignInBtn.sendKeys(Key.TAB);
            await clickSignInBtn.sendKeys(Key.RETURN);
            await driver.wait(
                until.titleIs('Sign in to GitHub · GitHub'));
            debug('done');

        });

        it('should input the user credentials', async function() {

            debug('sending input');
            await driver.sleep(5000);
            let inputUserName = await driver.findElement(By.xpath("//input[@id='login_field']"));
            let inputPassWord = await driver.findElement(By.xpath("//input[@id='password']"));
            await inputUserName.sendKeys('CH84');
            await inputPassWord.sendKeys('Gayathri1991');
            debug('done');

        });

        it('should click the login button', async function() {

            debug('clicking the login button');
            await driver.sleep(5000);
            let clickLoginBtn = await driver.findElement(By.xpath("//input[@value='Sign in']"));
            await clickLoginBtn.sendKeys(Key.TAB);
            await clickLoginBtn.sendKeys(Key.RETURN);
            debug('done');

        });


    });


});