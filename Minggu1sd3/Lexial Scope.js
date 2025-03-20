// Function dalam JavaScript bisa mengakses variabel dari function di atasnya.
function outerFunction() {
  let outerVar = "Saya dari luar!";

  function innerFunction() {
    console.log(outerVar); // ✅ Bisa mengakses outerVar
  }

  innerFunction();
}

outerFunction(); // Output: Saya dari luar!
