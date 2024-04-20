const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    Hello: function greeting() {
        console.log("Hello I am " + this.firstName);
    }
}
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);

person.Hello();