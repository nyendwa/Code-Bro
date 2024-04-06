// let username;
// username = window.prompt("Enter your your username: ");
// console.log(username);


// let username;
// document.getElementById('mysubmit').onclick = function () {
//     username = document.getElementById('myText').value;
//     document.getElementById('myH1').textContent = `Hello ${username}`;
// }

const PI = 3.14159;
let radius;
let circumference;

document.getElementById('mySubmit').onclick = function () {
    radius = document.getElementById('myText').value;
    radius=Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH1').textContent ='The Circumference is: '+circumference + ' cm';
    
}