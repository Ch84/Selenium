// Call webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

// Maxmize browser window

driver.manage().window().maximize();

// Get Google page

driver.get('https://www.google.com');

// Execute tests

var inputText = driver.findElement(By.name('q'));
inputText.sendKeys('webdriver');

// Pause my driver and connect to function

driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.click();

driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
        if (title === 'webdriver - Google Search') {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }
        driver.quit();
    });
});

