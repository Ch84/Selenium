var webdriver = require('selenium-webdriver');
var webdriver = webdriver.By;

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome())
.build();

driver.get('https://www.google.se');

driver.manage().window().maximize();

/* This script allows testing the wait. We make the element invisible
   and disable it and then set timeouts to make it visible and enabled. */

driver.executeScript("\
var q = document.getElementsByName('q')[0];\
q.style.display = 'none';\
q.disabled = true;\
setTimeout(function () {}\
    q.style.display = '';\
}, 2000);\
setTimeout(function() {\
    q.disabled = false;\
}, 3000);\
");
driver.findElement(By.name('q')).then(function(element) {
    driver.wait(function() {
        return element.isDisplayed().then(function(displayed) {
            if (!displayed) 
                return false;

                return element.isEnabled();
        });
    });
        element.sendKeys('webdriver');
});
driver.findElement(By.name(btnK)).click();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search';
    });
}, 1000);
driver.quit();


