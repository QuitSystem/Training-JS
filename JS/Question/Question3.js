// Fungsi yang menerima nilai, mengubahnya, dan mengembalikan nilai yang telah diubah
function ubahNilai(nilai) {
  nilai *= 2;
  return nilai;
}

// Nilai awal sebelum pengubahan
let nilaiAwal = 5;
console.log("Nilai awal:", nilaiAwal);

// Memanggil fungsi untuk mengubah nilai
let nilaiSetelahPerubahan = ubahNilai(nilaiAwal);

// Menunjukkan nilai setelah pengubahan
console.log("Nilai setelah perubahan:", nilaiSetelahPerubahan);
