---
module: "modul-05"
moduleTitle: "Back-End & Database"
moduleEmoji: "🗄️"
moduleColor: "from-emerald-500 to-teal-700"
moduleBorderColor: "border-emerald-500/50"
moduleAccentColor: "text-emerald-400"
order: 4
title: "PHP + MySQL — CRUD Dinamis"
icon: "⚙️"
description: "Membangun sistem Create, Read, Update, Delete yang sesungguhnya."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Koneksi database** dengan PDO (aman dari SQL Injection).
- **Prepared Statements:** Query parameterized yang aman.
- **Create:** Form + Validasi + INSERT ke database.
- **Read:** SELECT + Tampilkan di tabel HTML.
- **Update:** Form edit + UPDATE di database.
- **Delete:** Tombol hapus + DELETE + konfirmasi.
- **Pagination:** Menampilkan data per halaman.

## Contoh Kode

```php
<?php
// Koneksi Database (db.php)
$pdo = new PDO(
  'mysql:host=localhost;dbname=sekolah_db;charset=utf8',
  'root', '',
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

// READ: Ambil semua siswa
function getSiswa(PDO $pdo): array {
  $stmt = $pdo->query('SELECT * FROM siswa ORDER BY id DESC');
  return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// CREATE: Tambah siswa baru
function tambahSiswa(PDO $pdo, string $nama, int $kelas): void {
  $stmt = $pdo->prepare(
    'INSERT INTO siswa (nama, kelas) VALUES (?, ?)'
  );
  $stmt->execute([$nama, $kelas]);
}

// UPDATE: Edit data siswa
function updateSiswa(PDO $pdo, int $id, string $nama): void {
  $stmt = $pdo->prepare(
    'UPDATE siswa SET nama = ? WHERE id = ?'
  );
  $stmt->execute([$nama, $id]);
}

// DELETE: Hapus siswa
function hapusSiswa(PDO $pdo, int $id): void {
  $stmt = $pdo->prepare('DELETE FROM siswa WHERE id = ?');
  $stmt->execute([$id]);
}
```

## Latihan

1. Buat sistem CRUD lengkap untuk data produk (nama, harga, stok).
2. Tambahkan validasi: nama tidak boleh kosong, harga harus angka positif.
3. Tambahkan pagination: tampilkan 10 data per halaman.
4. Tambahkan fitur pencarian berdasarkan nama produk.
