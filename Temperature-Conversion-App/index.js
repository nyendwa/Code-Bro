
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "F";
    }
    else if (toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) + (5 / 9);
        result.textContent = temp.toFixed(2) + "C";
    }
    else {
        result.textContent = "Select Unit";
    }
}