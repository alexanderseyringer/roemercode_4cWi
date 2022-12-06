let ForeignExchangeRate = {USD: 1.05, LIRA: 0.054};
let originalAmount = 0;
let originCurrency = "";
let targetCurrency = "";
let targetCurrencyAmount = 0;

document.getElementById("calculate").addEventListener("click", function() {
    getInputs();
    calculate();
    write();
});

function getInputs() {
    originalAmount = document.getElementById("originCurrencyValue").value;
    originCurrency = document.getElementById("originCurrency").value;
    targetCurrency = document.getElementById("targetCurrency").value;
}

function calculate() {
    if (originCurrency == "EUR") {
        if (targetCurrency == "USD") {
            targetCurrencyAmount = originalAmount * ForeignExchangeRate.USD;
        }
    }
}

function write() {
    document.getElementById("targetCurrencyAmount").value = targetCurrencyAmount;
}