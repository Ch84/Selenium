// Call Selenium from library

var webdriver = require('selenium-webdriver');

// Set up my tools here

By = webdriver.By,
until = webdriver.until;

// Set up my webdriver here

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Get webpage here

driver.get('https://www.google.se/');

// Maximize window here

driver.manage().window().maximize();

// Execute tests here

var searchField = driver.findElement(By.name('q'));
searchField.sendKeys('webdriver');

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.click();

driver.sleep(20000);

var clickToolsBtn = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
clickToolsBtn.click();

var dropDownMenu = driver.wait(until.elementLocated(By.css('div.mn-hd-txt')));
dropDownMenu.isDisplayed().then(function() {
        console.log(dropDownMenu.click() + ' Success: Clicked element');
});

var chooseLang = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
chooseLang.isDisplayed().then(function() {
    console.log(chooseLang.click() + ' Success: Clicked element');
});
