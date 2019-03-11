// Call on webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Get Google Web Page

driver.get('https://www.google.se');

// Maximize browser window

driver.manage().window().maximize();

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

// Execute tests

var inputText = driver.findElement(By.name('q'));
inputText.sendKeys('webdriver');

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.click();

var clickToolBtn = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
clickToolBtn.click();

// Pause my driver

driver.sleep(20000);

var clickCountries = driver.wait(until.elementLocated(By.css('div.mn-hd-txt')));
clickCountries.isDisplayed();
clickCountries.isEnabled();
clickCountries.click();

var chooseCountry = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
chooseCountry.isDisplayed();
chooseCountry.isEnabled();
chooseCountry.click();

withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);





