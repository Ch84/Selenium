// Call webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up time handler tool

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

// Set up driver

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Get web page

driver.get('https://www.google.se');

// Maximize browser window

driver.manage().window().maximize();

// Execute tests

var clickLoginBtn = driver.findElement(By.xpath("//a[@id='gb_70']"));
clickLoginBtn.click();

var inputEmail = driver.wait(until.elementLocated(By.xpath("//input[@id='identifierId']")));
inputEmail.sendKeys('ch7751@gmail.com');

var clickNextBtn = driver.wait(until.elementLocated(By.css('span.RveJvd.snByac')));
clickNextBtn.click();

// Pause my driver

driver.sleep(20000);

// Continue execute

var inputPassword = driver.wait(until.elementLocated(By.xpath("//input[@name='password']")));
inputPassword.sendKeys('Gayatrikashunika');

// Pause my driver

driver.sleep(20000);

// Continue execute

var clickNextBtn2 = driver.wait(until.elementLocated(By.xpath("//div[@id='passwordNext']//content[@class='CwaK9']")));
clickNextBtn2.isDisplayed();
clickNextBtn2.isEnabled();
clickNextBtn2.click();

// Pause my driver

driver.sleep(20000);

// Continue execute

var inputTextField = driver.wait(until.elementLocated(By.name('q')));
inputTextField.sendKeys('webdriver');

var clickSearchBtn = driver.wait(until.elementLocated(By.name('btnK')));
clickSearchBtn.click();

withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);