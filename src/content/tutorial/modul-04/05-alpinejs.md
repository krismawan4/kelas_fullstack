---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 5
title: "Alpine.js"
icon: "⛰️"
description: "Framework JS minimalis bergaya Vue untuk menambahkan interaktivitas ringan."
duration: "1 Minggu"
---

## Apa yang Dipelajari

- **Filosofi Alpine.js:** Interaktivitas langsung di dalam HTML tanpa build step (seperti Tailwind untuk JS).
- **Direktif Dasar:** `x-data`, `x-bind`, `x-on`, `x-text`, `x-html`, `x-model`, `x-show`, `x-if`, `x-for`.
- **Transisi:** Menambahkan efek animasi mudah dengan `x-transition`.
- **Kapan menggunakannya:** Saat Anda hanya butuh sedikit JavaScript (dropdown, modal, tabs) tapi tidak ingin memuat React/Vue yang berat.

## Contoh Kode

```html
<!-- Dropdown Sederhana dengan Alpine.js -->
<div x-data="{ open: false }" class="relative">
  
  <button @click="open = !open" class="bg-indigo-600 text-white px-4 py-2 rounded-lg">
    Buka Menu
  </button>

  <div 
    x-show="open" 
    @click.outside="open = false"
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0 scale-90"
    x-transition:enter-end="opacity-100 scale-100"
    x-transition:leave="transition ease-in duration-200"
    x-transition:leave-start="opacity-100 scale-100"
    x-transition:leave-end="opacity-0 scale-90"
    class="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 w-48 text-black"
  >
    <a href="#" class="block py-1 hover:text-indigo-600">Profil</a>
    <a href="#" class="block py-1 hover:text-indigo-600">Pengaturan</a>
    <hr class="my-2">
    <a href="#" class="block py-1 text-red-600 hover:text-red-800">Keluar</a>
  </div>

</div>
```

## Latihan

1. Tambahkan Alpine.js via CDN ke proyek HTML sederhana.
2. Buat komponen **Tabs** (tab navigasi) menggunakan `x-data` dan `x-show`.
3. Buat komponen **Modal** yang bisa ditutup dengan menekan tombol `Escape` (`@keydown.escape.window`).
