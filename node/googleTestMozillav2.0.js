// Call webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

// Get Google Page

driver.get('https://www.google.com');

// Maximize the browser window

driver.manage().window().maximize();

// Execute tests

var inputText = driver.findElement(By.name('q'));
inputText.sendKeys('webdriver');

// Search for element and execute

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.isDisplayed();
clickSearchBtn.isEnabled();
clickSearchBtn.click();

var clickToolBtn = driver.wait(until.elementLocated(By.xpath("//a[@id='hdtb-tls']")));
clickToolBtn.click();

var clickCountry = driver.wait(until.elementLocated(By.css('div.mn-hd-txt')));
clickCountry.isDisplayed();
clickCountry.isEnabled();
clickCountry.click();

var chooseCountry = driver.wait(until.elementLocated(By.xpath("//li[@id='ctr_countrySE']")));
chooseCountry.isDisplayed();
chooseCountry.isEnabled();
chooseCountry.click();
