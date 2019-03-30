// Call the debugger and Selenium Webdriver from library

const debug = require('debug')('swdtest');
const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

// Set up the suite environment within an async function with parameter env

suite(async function(env) {

    /* Set up the describe scenario within an async function and explain what
       the test scenario is */

       describe('Google Test Filter Functions Scenario', async function() {

            // Create the variable driver and declare it

            let driver;

            // Before execution of tests create async function here

            before(async function() {

                /* Set up the debugger with the driver here and use the driver variable to build the environment
                with the parameter env and with the await command */

                debug('driver setup');
                driver = await env.builder().build();

            });

            // After execution close the browser within a normal function here

            after(function() {

                /* Set up the debugger here to teardown the driver
                   and use the driver quit command and use driver 
                   variable to set to null */

                   debug('driver teardown');
                   driver.quit();
                   driver = null;

            });

       });

});