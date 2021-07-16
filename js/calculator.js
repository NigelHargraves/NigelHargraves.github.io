//declare variables
//function to create 1st number
//function to set 1st number and set operator
//function to set 2nd number and call function to do calculation and return result
//display result

let number = 0;
let result = 0;
let newNum = 0;
let num1 = 0;
let operator = "";
let sum = "";
let isFirstNum = true;
let negNumber = false;
let equationNums = [];
let equationOps = [];

//add to numbers to create larger numbers
function addNumbers(newNum) {
    if (newNum == '-' && negNumber == false) {
        negNumber = true;
        document.getElementById("display1").value = '-' + document.getElementById("display1").value;
        document.getElementById("display1").style.fontWeight = "bold";
    } else if (newNum == '-' && negNumber == true) {
        negNumber = false;
        document.getElementById("display1").value = document.getElementById("display1").value.substring(1);
        document.getElementById("display1").style.fontWeight = "bold";

    } else {
        document.getElementById("display1").value += newNum;
        document.getElementById("display1").style.fontWeight = "bold";
    }

}

//function to toggle negative & positive numbers.
function negPosToggle(neg) {
    document.getElementById("display1").value = neg + newNum;
    document.getElementById("display1").style.fontWeight = "bold";
}




//set 1st number and operator
function setNum1(symbol) {
    if (isFirstNum === true) {
        document.getElementById("display2").value = symbol; //display symbol
        document.getElementById("display2").style.fontWeight = "bold";
        num1 = document.getElementById("display1").value;
        isFirstNum = false;
        equationOps.push(symbol);
        document.getElementById("display1").value = "";
    } else {
        document.getElementById("display2").value = symbol; //display symbol
        document.getElementById("display2").style.fontWeight = "bold";
        equationNums.push(document.getElementById("display1").value);
        equationOps.push(symbol);
        document.getElementById("display1").value = "";
    }
}

//set 2nd number and call calculation function
function setNum2() {
    equationNums.push(document.getElementById("display1").value);
    document.getElementById("display1").value = "";

    switch (equationOps[0]) {
        case "-":
            result = num1 - equationNums[0];
            break;
        case "+":
            result = +num1 + +equationNums[0];
            break;
        case "*":
            result = num1 * equationNums[0];
            break;
        case "/":
            result = num1 / equationNums[0];
            break;
    }

    for (i = 1; i < equationOps.length; i++) {
        switch (equationOps[i]) {
            case "-":
                result -= equationNums[i];
                break;
            case "+":
                result += +equationNums[i];
                break;
            case "*":
                result *= equationNums[i];
                break;
            case "/":
                result /= equationNums[i];
                break;
        }
    }

    document.getElementById("display1").value = result; //display result
    document.getElementById("display1").style.fontWeight = "bold";
}

function squaredNumber(symbol) {
    document.getElementById("display2").value = symbol; //display symbol
    document.getElementById("display2").style.fontWeight = "bold";
    result =
        document.getElementById("display1").value *
        document.getElementById("display1").value;
    document.getElementById("display1").value = result; //display result
    document.getElementById("display1").style.fontWeight = "bold";
}

function squareRootNumber(symbol) {
    number = document.getElementById("display1").value;
    document.getElementById("display2").value = symbol; //display symbol
    document.getElementById("display2").style.fontWeight = "bold";
    result = Math.sqrt(number);
    document.getElementById("display1").value = result; //display result
    document.getElementById("display1").style.fontWeight = "bold";
}

//clear all text and numbers to reset
function clearText() {
    document.getElementById("display1").value = "";
    document.getElementById("display2").value = "";
    result = 0;
    num1 = 0;
    operator = "";
    sum = "";
    isFirstNum = true;
    equationNums = [];
    equationOps = [];
}