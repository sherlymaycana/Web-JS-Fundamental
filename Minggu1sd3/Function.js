// Function adalah blok kode yang dibuat untuk menjalankan tugas tertentu dan bisa digunakan berulang kali.

// Function Declaration
function sayHello() {
  console.log("Hello, world!");
}
sayHello();

// Menambahkan parameter
function greet(name = "Sherly") {
  console.log("Hello, " + name);
}
greet("Alice");

// Function dengan Return
function tambah(a, b) {
  let hasil = a + b;
  return hasil;
}
// let hasil = tambah(5, 3);
// console.log(hasil);
console.log(tambah(10, 3));

function findArea(length, width) {
  const height = 15;
  if (length > width) {
    // Branch 1
    return length * width;
  }
  // Branch 2
  return height;
}

const length = 20;
const width = 10;
const height = 5;

console.log(findArea(height, width));

function sisi(s) {
  let hasil = s * s;
  return hasil;
}
console.log(sisi(5));
