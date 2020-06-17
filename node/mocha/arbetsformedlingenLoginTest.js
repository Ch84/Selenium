const debug = require('debug')('swdtest');
const {By, Key, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

suite(async function(env) {

    describe('Login to arbetsformedlingen scenario', async function() {

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

        it('should maximize browser window', async function() {

            debug('maximizing window');
            await driver.manage().window().maximize();
            debug('done');

        });

        it('should navigate to arbetsformedlingen web page', async function() {

            debug('navigating to web page');
            await driver.get('https://arbetsformedlingen.se/');
            debug('done');

        });

        it('should click on the logga in button', async function() {

            debug('searching for web element');
            let loginBtn = await driver.findElement(By.xpath("//a[@class='functions-nav__link js-start-login']"));
            debug('clicking on login button');
            await (await loginBtn.click());
            await driver.sleep(2000);
            debug('done');
            
        });

    });

});