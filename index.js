const CC = require('currency-converter-lt')
let currencyConverter = new CC({ from: "USD", to: "RUB", amount: 100 })
currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`) //or do something else
})
