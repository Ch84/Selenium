// Instantiate variable webdriver and require the selenium driver

var webdriver = require ('selenium-webdriver');

// Instantiate variable By and require the By command for webdriver

var By = webdriver.By,
until = webdriver.until;

// Instantiate variable driver and set up browser

var driver = new webdriver.Builder().forBrowser('chrome').build();

// Get URL here

driver.get('https://www.frontit.se/inspiration-kunskap/artiklar/testautomatisering-det-bra-det-daliga-och-den-stora-fragan');

// Set window size here

driver.manage().window().maximize();

// Execute commands on the webpage here

driver.sleep(20000);

driver.findElement(By.xpath("//li[@id='menu-item-65']")).click();

driver.get(baseUrl);
driver.findElement(By.linkText("Anmäl dig här")).click();
console.log("Found title on the page and clicked: " + driver.getTitle());


/* If or else here to check if title is correct of the current page
   built inside of a function which is stored in variable. In the end
   return the variable.
*/

driver.wait(check_title, 10000);

function check_title() {

    var promise = driver.getTitle().then(function(title) {

        if (title == 'Testautomatisering - det bra, det dåliga och den stora frågan - Frontit') {

            console.log('Success - Found Title ' + title)
            return true;

        } else {

            console.log('Failure - Title Not Found ' + title)

        }

    });

    return promise;

}
