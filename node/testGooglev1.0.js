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

// Execute commands on the webpage here

// Wait for browser to load

driver.sleep(20000);

// Execute findelement commands here

driver.findElement(By.name('q')).sendKeys('Selenium Webdriver');
driver.findElement(By.name('btnK')).click();
    
// Wait for browser to load

driver.sleep(20000);

/* Instantiate variable and store value meaning that webdriver must wait 
   until the element has been located, then click on the element */

driver.sleep(20000);

var query0 = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
query0.click();

driver.sleep(20000);

var query1 = driver.wait(until.elementLocated(By.css('span.mn-dwn-arw')));
query1.click();
 
driver.sleep(20000);

var query2 = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
query2.click(); 

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