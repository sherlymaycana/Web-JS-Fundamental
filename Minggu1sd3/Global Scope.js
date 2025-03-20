// Global Scope
// Variabel yang dibuat di luar function bisa diakses dari mana saja.
let globalVar = "Saya bisa diakses di mana saja!";

function showGlobal() {
  console.log(globalVar);
}
showGlobal();
console.log(globalVar);
