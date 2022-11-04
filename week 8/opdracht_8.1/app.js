let number1 = document.getElementById("input1");
let number2 = document.getElementById("input2");

function plus() {
    let answer = Number(number1.value) + Number(number2.value);
    document.getElementById("answer").innerText = answer;
}

function minus() {
    let answer = number1.value - number2.value;
    document.getElementById("answer").innerText = answer;
}

function multiply() {
    let answer = number1.value * number2.value;
    document.getElementById("answer").innerText = answer;
}

function divide() {
    let answer = number1.value / number2.value;
    document.getElementById("answer").innerText = answer;
}