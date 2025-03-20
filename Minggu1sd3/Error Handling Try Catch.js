try {
  let result = 10 / 0; // Tidak menyebabkan error
  console.log(result);
  let x = y; // ReferenceError karena y tidak dideklarasikan
} catch (error) {
  console.log("Terjadi kesalahan:", error.message);
}
