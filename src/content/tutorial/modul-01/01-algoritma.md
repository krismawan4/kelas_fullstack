---
module: "modul-01"
moduleTitle: "Tools & Algoritma"
moduleEmoji: "🖥️"
moduleColor: "from-violet-500 to-purple-700"
moduleBorderColor: "border-violet-500/50"
moduleAccentColor: "text-violet-400"
order: 1
title: "Mengenal Algoritma & Logika Pemrograman"
icon: "🧠"
description: "Konsep dasar berpikir seperti programmer."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- **Apa itu Algoritma?** Urutan instruksi yang jelas untuk menyelesaikan masalah.
- **Flowchart:** Cara menggambarkan alur program secara visual.
- **Pseudocode:** Menuliskan logika program dengan bahasa manusia.
- **Percabangan (if-else):** Membuat program mengambil keputusan.
- **Perulangan (for, while):** Mengulang instruksi secara efisien.

## Contoh Kode

```javascript
// Contoh Algoritma Sederhana
// Menentukan apakah angka ganjil atau genap

function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(cekGanjilGenap(10)); // "Genap"
console.log(cekGanjilGenap(7));  // "Ganjil"
```

## Latihan

<details>
  <summary><strong>1. Buatlah flowchart untuk menentukan apakah seseorang lulus ujian (nilai >= 75).</strong></summary>

  > **Jawaban:**
  >
  > ```mermaid
  > graph TD
  >     A([Mulai]) --> B[/Input Nilai Ujian/]
  >     B --> C{Apakah Nilai >= 75?}
  >     C -- Ya --> D[/Tampilkan "Lulus"/]
  >     C -- Tidak --> E[/Tampilkan "Tidak Lulus"/]
  >     D --> F([Selesai])
  >     E --> F
  > ```
</details>

<details>
  <summary><strong>2. Tulis pseudocode untuk menghitung rata-rata dari 5 nilai.</strong></summary>

  > **Jawaban:**
  >
  > ```text
  > MULAI
  >   TOTAL = 0
  >   UNTUK i DARI 1 SAMPAI 5:
  >     BACA nilai
  >     TOTAL = TOTAL + nilai
  >   RATA_RATA = TOTAL / 5
  >   TAMPILKAN RATA_RATA
  > SELESAI
  > ```
</details>

<details>
  <summary><strong>3. Buat fungsi JavaScript yang menerima array angka dan mengembalikan angka terbesar.</strong></summary>

  > **Jawaban:**
  >
  > ```javascript
  > function cariAngkaTerbesar(arr) {
  >   let terbesar = arr[0];
  >   for (let i = 1; i < arr.length; i++) {
  >     if (arr[i] > terbesar) {
  >       terbesar = arr[i];
  >     }
  >   }
  >   return terbesar;
  > }
  > 
  > // Contoh penggunaan:
  > console.log(cariAngkaTerbesar([10, 5, 20, 8])); // Output: 20
  > ```
</details>
