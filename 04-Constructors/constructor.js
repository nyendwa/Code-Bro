function Person(name, age){
    this.name = name;
    this.age = age;
}

var person = new Person("Spongebob", 32);
console.log("My name is "+ person.name);
console.log("I am "+person.age+" years old.");