---
module: "modul-03"
moduleTitle: "Front-End Basic"
moduleEmoji: "🌐"
moduleColor: "from-orange-500 to-amber-700"
moduleBorderColor: "border-orange-500/50"
moduleAccentColor: "text-orange-400"
order: 3
title: "JavaScript Dasar"
icon: "✨"
description: "Menambahkan logika dan interaktivitas pada website."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Tipe Data:** String, Number, Boolean, Array, Object.
- **Variabel:** `let`, `const`, `var` — kapan menggunakannya.
- **Fungsi:** Function declaration, arrow function, callback.
- **Array methods:** `.map()`, `.filter()`, `.find()`, `.reduce()`.
- **Object:** Properti, method, destructuring.
- **DOM Manipulation:** `document.querySelector`, `.innerHTML`, `.classList`.

## Contoh Kode

```javascript
// JavaScript Modern ES6+

// 1. Variabel
const nama = "Budi";
let umur = 17;

// 2. Arrow Function
const sapa = (nama) => `Halo, ${nama}!`;
console.log(sapa("Budi")); // "Halo, Budi!"

// 3. Array Methods
const nilai = [70, 85, 60, 90, 75];
const lulus = nilai.filter(n => n >= 75);
// [85, 90, 75]

const rataRata = nilai.reduce((a, b) => a + b, 0) / nilai.length;
// 76

// 4. DOM Manipulation
const tombol = document.querySelector('#tombol');
tombol.addEventListener('click', () => {
  document.querySelector('#pesan').textContent = 'Tombol diklik!';
});
```

## Latihan

1. Buat fungsi yang menerima array nama dan mengembalikan nama yang hurufnya lebih dari 5.
2. Buat to-do list sederhana menggunakan DOM manipulation (tambah, hapus item).
3. Buat kalkulator sederhana di browser (HTML + CSS + JS).
