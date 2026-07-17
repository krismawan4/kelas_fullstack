---
module: "modul-03"
moduleTitle: "Front-End Basic"
moduleEmoji: "🌐"
moduleColor: "from-orange-500 to-amber-700"
moduleBorderColor: "border-orange-500/50"
moduleAccentColor: "text-orange-400"
order: 2
title: "CSS & Styling"
icon: "🎨"
description: "Memberikan gaya dan tampilan yang menarik pada halaman."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Selector CSS:** Class (`.kelas`), ID (`#id`), Tag (`p`), Pseudo (`:hover`).
- **Box Model:** `margin`, `padding`, `border`, `width`, `height`.
- **Flexbox:** Layout yang fleksibel dengan `display: flex`.
- **CSS Grid:** Layout dua dimensi dengan `display: grid`.
- **Responsive Design:** `@media` queries untuk berbagai ukuran layar.
- **CSS Variables:** `--warna-utama: #6366f1` — nilai yang bisa dipakai ulang.

## Contoh Kode

```css
/* CSS Modern dengan Flexbox & Grid */
:root {
  --warna-utama: #6366f1;
  --font-utama: 'Inter', sans-serif;
}

body {
  font-family: var(--font-utama);
  margin: 0;
  padding: 0;
}

/* Navbar dengan Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--warna-utama);
}

/* Grid Layout */
.kartu-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

## Latihan

1. Style halaman HTML dari latihan sebelumnya menggunakan CSS external.
2. Buat navbar responsif menggunakan Flexbox.
3. Buat grid layout 3 kolom untuk menampilkan kartu profil.
4. Tambahkan dark mode menggunakan CSS variables dan `@media (prefers-color-scheme: dark)`.
