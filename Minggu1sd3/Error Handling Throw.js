// Error handling adalah teknik yang digunakan untuk menangani
// kesalahan dalam kode agar aplikasi tetap berjalan dengan baik
function validateAge(age) {
  if (age < 18) {
    throw new Error("Usia harus minimal 18 tahun!");
    // console.log("Usia harus minimal 18 tahun!");
  }
  return "Pendaftaran berhasil!";
}

try {
  console.log(validateAge(15)); //error
} catch (error) {
  console.log("Error:", error.message);
}
