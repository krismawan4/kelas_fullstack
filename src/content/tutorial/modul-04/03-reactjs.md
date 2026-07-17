---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 3
title: "React.js — Hooks"
icon: "⚛️"
description: "Library UI terpopuler dari Meta/Facebook."
duration: "5 Minggu"
---

## Apa yang Dipelajari

- **JSX:** Menulis HTML di dalam JavaScript.
- **`useState()`:** State/data lokal sebuah komponen.
- **`useEffect()`:** Efek samping (fetch data, event listener).
- **`useContext()`:** Berbagi data antar komponen tanpa prop drilling.
- **Props:** Mengirim data dari komponen induk ke anak.
- **React Router:** Navigasi halaman di React.
- **TanStack Query:** Fetch & cache data dari server.

## Contoh Kode

```jsx
import { useState, useEffect } from 'react'

// Komponen Daftar Siswa
function DaftarSiswa() {
  const [siswa, setSiswa] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ambil data saat komponen pertama kali muncul
    fetch('/api/siswa')
      .then(res => res.json())
      .then(data => {
        setSiswa(data)
        setLoading(false)
      })
  }, []) // [] = hanya jalankan sekali

  if (loading) return <p>Memuat data...</p>

  return (
    <ul className="space-y-2">
      {siswa.map(s => (
        <li key={s.id} className="p-4 bg-white rounded-xl shadow">
          <strong>{s.nama}</strong> — {s.kelas}
        </li>
      ))}
    </ul>
  )
}

export default DaftarSiswa
```

## Latihan

1. Buat komponen counter React dengan `useState`.
2. Buat komponen yang mengambil data dari API menggunakan `useEffect`.
3. Bandingkan pengalaman coding React vs Vue — tulis 3 perbedaan utama.
