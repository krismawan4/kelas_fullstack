---
module: "modul-03"
moduleTitle: "Front-End Basic"
moduleEmoji: "🎨"
moduleColor: "from-orange-500 to-red-700"
moduleBorderColor: "border-orange-500/50"
moduleAccentColor: "text-orange-400"
order: 8
title: "Belajar AJAX dan Web API"
icon: "🌐"
description: "Mengambil data dari server secara dinamis."
duration: "1 Minggu"
---

## Apa yang Dipelajari

- **Fetch API & Axios.**
- **HTTP Methods:** GET, POST, PUT, DELETE.
- **JSON Format.**

## Contoh Kode

Berikut adalah contoh penggunaan `fetch` API untuk mengambil data dari server secara dinamis:

```javascript
// Mengambil data postingan dari API publik
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Mengubah response menjadi objek JSON
  .then(data => {
    console.log("Judul Postingan:", data.title);
    console.log("Isi:", data.body);
  })
  .catch(error => {
    console.error("Terjadi kesalahan:", error);
  });
```

## Latihan

Berdasarkan contoh di atas, kerjakan latihan berikut:

<details>
  <summary><strong>1. Tampilkan daftar user dari JSONPlaceholder API (https://jsonplaceholder.typicode.com/users).</strong></summary>
  
  > **Struktur Data JSON yang didapat:**
  > ```json
  > [
  >   {
  >     "id": 1,
  >     "name": "Leanne Graham",
  >     "username": "Bret",
  >     "email": "Sincere@april.biz"
  >   },
  >   // ... 9 user lainnya
  > ]
  > ```
  >
  > **Jawaban Kode JavaScript:**
  > ```javascript
  > fetch('https://jsonplaceholder.typicode.com/users')
  >   .then(response => response.json())
  >   .then(users => {
  >     console.log("Daftar User:");
  >     // Melakukan perulangan (loop) untuk setiap user
  >     users.forEach(user => {
  >       console.log(`- Nama: ${user.name} | Email: ${user.email}`);
  >     });
  >   })
  >   .catch(error => console.error("Gagal mengambil data:", error));
  > ```
</details>