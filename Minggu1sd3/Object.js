// Object dalam JavaScript adalah koleksi pasangan key-value, yang
// digunakan untuk menyimpan data dengan struktur yang lebih kompleks.
const person = {
  name: "Alice", //properti
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`); // methode
  },
  myage: function () {
    console.log(`And my age is ${this.age} years old`);
  },
};
console.log(person.name);
console.log(person.age);
person.greet();
