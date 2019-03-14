// Call on webdriver

var webdriver = require('selenium-webdriver');

// Set up tools

By = webdriver.By,
until = webdriver.until;

// Set up browser

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

// Maximize browser window

driver.manage().window().maximize();

// Get Google Web Page

driver.get('https://www.google.com');

console.log('Executing webdriver...');

// Execute tests

var inputText = driver.findElement(By.name('q'));
inputText.sendKeys('webdriver');

var clickSearchBtn = driver.findElement(By.name('btnK'));
clickSearchBtn.isDisplayed();
clickSearchBtn.isEnabled();
clickSearchBtn.click();

// Pause my driver

driver.sleep(20000);

// Continue execution

var clickImages = driver.wait(until.elementLocated(By.css('a.q.qs')));
clickImages.isDisplayed();
clickImages.isEnabled();
clickImages.click();

var clickImage = driver.wait(until.elementLocated(By.xpath("//*[@id='_xiyWq3kzikvjM:']")));
clickImage.isDisplayed();
clickImage.isEnabled();
clickImage.click();

var enlargeImage = driver.wait(until.elementLocated(By.linkText("Relaterad bild")));
enlargeImage.isDisplayed();
enlargeImage.isSelected();
enlargeImage.click();