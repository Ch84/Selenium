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

    });

});