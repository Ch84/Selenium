const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
const { suite } = require('selenium-webdriver/testing');
const { elementTextIs, elementTextContains, elementLocated, elementTextMatches, elementIsSelected, elementIsVisible, elementsLocated } = require('selenium-webdriver/lib/until');

// Setting up suite

suite(async function(env) {

    // Describing test scenario

    describe('simple mocha test for asserting clickable button', async function() {

        let driver;

        // Setting up driver

        before(async function() {

            debug('driver setup');
            driver = await env.builder().build();
            debug('done');

        });

        // Teardown driver

        after(function() {

            debug('driver teardown');
            driver.quit();
            driver = null;
            debug('done');

        });

        // Fetching Google Page and maximizing browser window

        it('should fetch Google page and maximize browser window', async function() {

            debug('fetched page');
            driver.get('https://www.google.se/');
            debug('done');

            debug('maximizing browser window');
            driver.manage().window().maximize();
            debug('done');


        });

        // Test cases

        it('should assert that the search button is located', async function() {

            debug('asserted that the search btn located');
            assert(elementsLocated(By.name("btnK")));
            debug('done');

        });

        it('should click the search button on the Google page', async function() {

            debug('found search btn');
            var clickSearchBtn = await driver.findElement(By.xpath("//div[@class='FPdoLc tfB0Bf']//input[@name='btnK']"));
            debug('clicked search btn');
            await (await clickSearchBtn.click());
            debug('done');

        });
       
    });

});