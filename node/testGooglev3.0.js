// Call Selenium from library

var webdriver = require('selenium-webdriver');

// Create variables with necessary tools

By = webdriver.By,
until = webdriver.until;

// Set up webdriver

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Get HTML page

driver.get('http://www.google.se');

// Maximize window

driver.manage().window().maximize();

// Execute tests

var searchField = driver.findElement(By.name('q'));
searchField.sendKeys('Selenium Webdriver');

var button = driver.findElement(By.name('btnK'));
button.click();

var toolsBtn = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
toolsBtn.click();

var langDropDown = driver.wait(until.elementLocated(By.css('div.mn-hd-txt')));
langDropDown.isDisplayed().then(function(text) {
    if (text == 'Alla länder') {

        console.log('Element containing text: Alla länder was clicked');
        return text = langDropDown.click();

    } else {

        console.log('Element containing text: Alla länder was not clicked');

    }
    
});

var elementToClick = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
elementToClick.isDisplayed().then(function(text) {

    if (text == 'Land: Sverige') {

        elementToClick.click();
        console.log('Element containing text: Land: Sverige was clicked');

    } else {

        console.log('Element containing text: Land: Sverige was not clicked');

    }

    
});



