let inputfield1 = "";
let inputfield2 = "";

function addUp() {
    inputfield1 = document.getElementById("numberOne").value;
    inputfield2 = document.getElementById("numberTwo").value;

    let result = parseFloat(inputfield1) + parseFloat(inputfield2);

    document.getElementById("content").innerHTML = result;
}

function subtract() {
    inputfield1 = document.getElementById("numberOne").value;
    inputfield2 = document.getElementById("numberTwo").value;

    let result = parseFloat(inputfield1) - parseFloat(inputfield2);

    document.getElementById("content").innerHTML = result;
}

function multiply() {
    inputfield1 = document.getElementById("numberOne").value;
    inputfield2 = document.getElementById("numberTwo").value;

    let result = parseFloat(inputfield1) * parseFloat(inputfield2);

    document.getElementById("content").innerHTML = result;
}

function divide() {
    inputfield1 = document.getElementById("numberOne").value;
    inputfield2 = document.getElementById("numberTwo").value;

    let result = parseFloat(inputfield1) / parseFloat(inputfield2);

    document.getElementById("content").innerHTML = result;
}