function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Bob", 30, "Jakarta");
const person2 = new Person("Charlie", 28, "Solo");
const person3 = new Person("Sherly", 24, "Solo");

console.log(person1.city); // Output: Bob
// console.log(person2.age); // Output: 28
// person1.greet(); // Output: Hello, my name is Bob
console.log(person3.name);
