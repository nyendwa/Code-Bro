
const _textBox = document.getElementById("textBox");
const _toFahrenheit = document.getElementById("toFahrenheit");
const _toCelcius = document.getElementById("toCelcius");
const _result = document.getElementById("result");
let temp;

function convert() {
    if (_toFahrenheit.checked) {
        temp = Number(_textBox.value);
        temp = temp * 9 / 5 + 32;
        _result.textContent = temp.toFixed(2) + "F";
    }
    else if (_toCelcius.checked) {
        temp = Number(_textBox.value);
        temp = (temp - 32) + (5 / 9);
        _result.textContent = temp.toFixed(2) + "C";
    }
    else {
        _result.textContent = "Select  Unit";
    }
}