---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 4
title: "Bootstrap & jQuery"
icon: "🅱️"
description: "Framework CSS legendaris dan library JS yang masih banyak digunakan."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- **Bootstrap 5:** Sistem grid 12 kolom, komponen siap pakai (Navbar, Modal, Card).
- **jQuery:** Manipulasi DOM yang lebih singkat dibandingkan Vanilla JS.
- **AJAX di jQuery:** Mengambil data tanpa reload halaman.
- **Kapan menggunakannya:** Memelihara (maintain) proyek lama (legacy code) atau membuat MVP dengan sangat cepat.

## Contoh Kode (jQuery & Bootstrap)

```html
<!-- Tombol Bootstrap -->
<button id="btn-muat" class="btn btn-primary">Muat Data</button>

<!-- Container Data -->
<div id="hasil" class="mt-3"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    $('#btn-muat').click(function() {
      // AJAX request dengan jQuery
      $.get('https://jsonplaceholder.typicode.com/users/1', function(data) {
        $('#hasil').html(`
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.email}</p>
            </div>
          </div>
        `);
      });
    });
  });
</script>
```

## Latihan

1. Buat landing page menggunakan komponen Bootstrap (Navbar, Hero, Features, Footer).
2. Gunakan jQuery untuk membuat efek animasi *smooth scroll* pada navigasi.
3. Buat form kontak dengan validasi menggunakan jQuery sebelum di-*submit*.
