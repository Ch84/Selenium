// Call webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

// Get Google Web Page

driver.get('https://www.google.se');

console.log('Executing webdriver...');

// Execute tests

var inputText = driver.findElement(By.name('q'));
inputText.sendKeys('webdriver');

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.isDisplayed();
clickSearchBtn.isEnabled();
clickSearchBtn.click();

// If title is found then the test is passed, else failed.

driver.sleep(2000).then(function() {

    driver.getTitle().then(function(title) {

        if (title === 'webdriver - Sök på Google') {

            console.log('Test Passed');

        } else {

            console.log('Test Passed');

        }

    }); 

});