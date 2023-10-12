let currentResult = "0";

function updateResult() {
    document.getElementById('result').innerText = currentResult;
}

function appendToResult(value) {
    if (currentResult === "0" && value !== ".") {
        currentResult = value;
    } else {
        currentResult += value;
    }
    updateResult();
}

function clearResult() {
    currentResult = "0";
    updateResult();
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        updateResult();
    } catch (error) {
        currentResult = "Error";
        updateResult();
    }
}

function squareRoot() {
    currentResult = Math.sqrt(currentResult);
    updateResult();
}

function square() {
    currentResult = Math.pow(currentResult, 2);
    updateResult();
}

function exponentiation() {
    currentResult = Math.exp(currentResult);
    updateResult();
}

function sine() {
    currentResult = Math.sin(currentResult);
    updateResult();
}

function cosine() {
    currentResult = Math.cos(currentResult);
    updateResult();
}

function tangent() {
    currentResult = Math.tan(currentResult);
    updateResult();
}

function backspace() {
    currentResult = currentResult.slice(0, -1);
}