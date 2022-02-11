const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CartSuite', function () {
    this.timeout(30000)
    let driver
    let vars

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
        await driver.get("https://migpalser.github.io/robobar-example/#!/");
    })

    afterEach(async function () {
        await driver.quit();
    })
    it('BeerTest', async function () {
        // Test name: BeerTest

        //Espera hasta que localice el elemento
        await driver.wait(until.elementLocated(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")), 30000);

        //Haz click
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()

        //Assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€2.00")

        //Segundo click
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
        //Segundo assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€4.00")
    })
    it('ColaTest', async function () {
        // Test name: ColaTest
        //Espera hasta que localice el elemento
        await driver.wait(until.elementLocated(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")), 30000);

        //Haz click 
        await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()

        //Assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€1.25")
     
        //Haz click 
        await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()

        //Assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€2.50")
    })
    it('WineTest', async function () {
        // Test name: WineTest

        //Espera hasta que localice el elemento
        await driver.wait(until.elementLocated(By.css(".ng-scope:nth-child(3) > td .input-group-append > .btn")), 30000);

        //Haz click 
        await driver.findElement(By.css(".ng-scope:nth-child(3) > td .input-group-append > .btn")).click()
 
        //Assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€3.00")
 
        //Haz click 
        await driver.findElement(By.css(".ng-scope:nth-child(3) > td .input-group-append > .btn")).click()
 
        //Assert sobre la cuenta
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€6.00")
    })
})