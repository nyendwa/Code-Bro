const prices = [10, 15, 22, 18,35];
const total = prices.reduce(sum);
const ave = total / prices.length;

function sum(acc,arr) {
    return acc + arr;
}

console.log(ave);