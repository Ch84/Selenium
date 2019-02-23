// Instantiate the variable webdriver and require the selenium webdriver

var webdriver = require ('selenium-webdriver');

// Handle errors

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
withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);

// Instantiate the variable By and until and require them for webdriver

By = webdriver.By,
until = webdriver.until;

// Instantiate the variable driver and set up browser

var driver = new webdriver.Builder().forBrowser('chrome').build();

// Get URL here

driver.get('https://www.google.se/?client=safari&channel=iphone_bm');

// Set window size here

driver.manage().window().maximize();

/* Instantiate variable and store value meaning that webdriver must wait 
   until the element has been located, then click on the element */

const element0 = driver.wait(until.elementLocated(By.name('q')), 30000);
element0.sendKeys('Selenium Webdriver');

const element1 = driver.wait(until.elementLocated(By.name('btnK')), 30000);
element1.click();

const element2 = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")), 30000);
element2.click();

const element3 = driver.wait(until.elementLocated(By.css('span.mn-dwn-arw')), 30000);
element3.click();

const element4 = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")), 30000);
element4.click();

/* If or else here to check if title is correct of the current page
   built inside of a function which is stored in variable. In the end
   return the variable.
*/

driver.wait(check_title, 10000);

function check_title() {

    var promise = driver.getTitle().then(function(title) {

        if (title == 'Selenium Webdriver - Sök på Google') {

            console.log('success found ' + title);
            return true;

        } else {

            console.log('failure did not find ' + title);

        }

    });
    
    return promise;

}
