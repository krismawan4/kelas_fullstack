---
module: "modul-03"
moduleTitle: "Front-End Basic"
moduleEmoji: "🌐"
moduleColor: "from-orange-500 to-amber-700"
moduleBorderColor: "border-orange-500/50"
moduleAccentColor: "text-orange-400"
order: 4
title: "Async JS & Fetch API"
icon: "🔗"
description: "Mengambil data dari server dan mengelola operasi asinkron."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Callback:** Cara lama menangani operasi async.
- **Promise:** `.then()`, `.catch()`, `.finally()`.
- **Async/Await:** Cara modern menulis kode async seperti sync.
- **Fetch API:** Mengambil data dari REST API.
- **Axios:** Library HTTP yang lebih mudah dari Fetch.
- **JSON:** Format data yang paling umum di web.

## Contoh Kode

```javascript
// Mengambil data dari API dengan Async/Await

async function ambilDataSiswa() {
  try {
    const response = await fetch(
      'https://api.example.com/siswa'
    );

    if (!response.ok) {
      throw new Error('Gagal mengambil data!');
    }

    const data = await response.json();
    tampilkanData(data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

function tampilkanData(siswa) {
  const container = document.querySelector('#daftar');
  container.innerHTML = siswa.map(s =>
    `<div class="kartu">
      <h3>${s.nama}</h3>
      <p>Kelas: ${s.kelas}</p>
    </div>`
  ).join('');
}

ambilDataSiswa();
```

## Latihan

1. Ambil data dari API publik (jsonplaceholder.typicode.com/users) dan tampilkan di halaman.
2. Buat fungsi pencarian yang memfilter data dari API berdasarkan input user.
3. Tangani error: tampilkan pesan yang user-friendly jika API gagal.
