let EURUSD = {originalCurrency: "EUR", targetCurrency: "USD", exchangeRate: 1.05};
let LIRAUSD = {originalCurrency: "LIRA", targetCurrency: "USD", exchangeRate: 0.054};

let foreignExchangeRates = [EURUSD, LIRAUSD];

document.getElementById("calculate").addEventListener("click", calculate());

function getInputs() {
    let originalAmount = document.getElementById("originCurrencyValue").value;
    let originCurrency = document.getElementById("originCurrency").value;
    let targetCurrency = document.getElementById("targetCurrency").value;
    return originalAmount, originCurrency, targetCurrency;
}

function calculate() {
    if (originCurrency == "EUR") {
        if (targetCurrency == "USD") {
            targetCurrencyAmount = getInputs.originalAmount * foreignExchangeRates.exchangeRate;
        }
    }
    return targetCurrencyAmount;
}