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

withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);