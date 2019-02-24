// Get Selenium From Library

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Get Web Page

driver.get('https://www.google.se');

// Execute time handler tool

const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {

    execute(asyncFunc, ...args) {

        this.emit('begin');
        console.time('execute');
        asyncFunc(...args, (err, data) => {

            if (err) {

                return this.emit('error', err);

            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');

        });

    }

}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));

// Maximize browser window

driver.manage().window().maximize();

// Execute my tests here

var searchField = driver.findElement(By.name('q'));
searchField.sendKeys('webdriver');

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.click();

var toolsBtn = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
toolsBtn.isEnabled().then(function() {

    // Pause my driver

    driver.sleep(10000);
    toolsBtn.click();

    // Create new variables within function

    var chooseCountry = driver.wait(until.elementLocated(By.css('div.mn-hd-txt')));
    chooseCountry.isDisplayed().then(function() {
        chooseCountry.click();
    });

    var chooseCountry2 = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
    chooseCountry2.isDisplayed().then(function() {
        chooseCountry2.click();
    });

    console.log('Finished executing tests');

});

withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);
