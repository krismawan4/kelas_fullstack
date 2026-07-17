---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 1
title: "Tailwind CSS"
icon: "💨"
description: "Framework CSS utility-first untuk styling super cepat."
duration: "5 Minggu"
---

## Apa yang Dipelajari

- **Filosofi utility-first:** Tidak menulis CSS manual, gunakan class.
- **Layout:** `flex`, `grid`, `container`, `mx-auto`.
- **Spacing:** `p-4` (padding), `m-4` (margin), `gap-4` (jarak grid).
- **Typography:** `text-lg`, `font-bold`, `text-gray-500`.
- **Colors:** `bg-blue-500`, `text-white`, `border-gray-200`.
- **Responsive:** `md:`, `lg:`, `xl:` prefiks untuk breakpoint.
- **Dark mode:** `dark:bg-slate-900`.

## Contoh Kode

```html
<!-- Kartu Profil dengan Tailwind CSS -->
<div class="max-w-sm mx-auto bg-white rounded-2xl 
            shadow-xl overflow-hidden hover:scale-105 
            transition-transform duration-300">
  
  <div class="bg-gradient-to-r from-violet-500 to-blue-500 
              h-24" />

  <div class="p-6 -mt-10">
    <img
      src="foto.jpg"
      class="w-20 h-20 rounded-full border-4 border-white 
             shadow-lg object-cover"
    />
    <h2 class="text-xl font-bold text-gray-800 mt-3">
      Budi Santoso
    </h2>
    <p class="text-gray-500 text-sm">
      SMK Bhakti — Kelas XI RPL
    </p>
    <button class="mt-4 w-full bg-violet-600 hover:bg-violet-700 
                   text-white font-semibold py-2 rounded-lg 
                   transition-colors">
      Lihat Profil
    </button>
  </div>
</div>
```

## Latihan

1. Buat navbar responsif dengan Tailwind (mobile hamburger menu).
2. Buat kartu profil seperti contoh di atas.
3. Buat halaman landing page sederhana hanya dengan Tailwind CSS class.
