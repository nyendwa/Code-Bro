const decreaseBtn = document.getElementById('decreaseBtn');
const ResetBtn = document.getElementById('ResetBtn');
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent=count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent=count;
}

ResetBtn.onclick = function () {
    count = 0;
    countLabel.textContent=count;
}