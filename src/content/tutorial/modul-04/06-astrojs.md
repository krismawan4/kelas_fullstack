---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 6
title: "Membangun Situs Super Cepat dengan Astro"
icon: "🚀"
description: "Framework web modern untuk website yang sangat cepat berorientasi pada konten."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- **Konsep Islands Architecture:** Hanya mengirim JavaScript ke browser jika benar-benar dibutuhkan (Zero JS by default).
- **Astro Components (`.astro`):** Komponen HTML/JS hybrid yang dieksekusi di server.
- **Routing:** File-based routing di dalam folder `src/pages/`.
- **Integrasi Framework:** Bisa menggunakan Vue, React, Svelte, dan Alpine.js di dalam satu proyek Astro secara bersamaan!
- **Content Collections:** Mengelola konten Markdown/MDX dengan validasi tipe data yang ketat.

## Contoh Kode

```astro
---
// Ini adalah bagian Frontmatter (Dieksekusi di Server)
import Header from '../components/Header.astro';
import ReactCounter from '../components/ReactCounter.jsx';

const title = "Halo Astro!";
const data = await fetch('https://api.example.com/posts').then(r => r.json());
---

<!-- Ini adalah bagian Template (HTML) -->
<html lang="id">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <Header />
    
    <main>
      <h1>Website Super Cepat 🚀</h1>
      
      <!-- Komponen React hanya akan diload JS-nya ketika user melihatnya (Islands) -->
      <ReactCounter client:visible />

      <ul>
        {data.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
    </main>
  </body>
</html>
```

## Latihan

1. Buat proyek baru dengan `npm create astro@latest`.
2. Buat blog portofolio sederhana menggunakan fitur **Astro Content Collections** untuk merender file `.md`.
3. Terapkan integrasi React atau Vue ke dalam proyek Astro dan gunakan direktif `client:load` atau `client:visible`.
