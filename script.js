
let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").innerText = displayValue;
    } catch (error) {
        document.getElementById("display").innerText = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

function square() {
    displayValue = Math.pow(currentResult, 2);
    document.getElementById("display").innerText = displayValue;
}

function exponentiation() {
    currentResult = Math.exp(currentResult);
    updateResult();
}

function squareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById("display").innerText = displayValue;
}

function calculateExponentiation() {
    displayValue = Math.pow(eval(displayValue), 2);
    document.getElementById("display").innerText = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").innerText = displayValue;
}

function evaluateFunction() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").innerText = displayValue;
    } catch (error) {
        document.getElementById("display").innerText = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        appendToDisplay(event.key);
    } else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {
        appendToDisplay(event.key);
    } else if (event.key === ".") {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        evaluateFunction();
    } else if (event.key === "Escape") {
        clearDisplay();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "^") {
        appendToDisplay("**");
    } else if (event.key === "t") {
        appendToDisplay("Math.tan(");
    } else if (event.key === "l") {
        appendToDisplay("Math.log(");
    } else if (event.key === "s") {
        appendToDisplay("Math.sin(");
    } else if (event.key === "c") {
        appendToDisplay("Math.cos(");
    } else if (event.key === "p") {
        appendToDisplay("Math.PI");
    } else if (event.key === "e") {
        appendToDisplay("Math.E");
    } else if (event.key === "(") {
        appendToDisplay("(");
    } else if (event.key === ")") {
        appendToDisplay(")");
    }
});
