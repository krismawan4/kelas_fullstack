---
module: "modul-05"
moduleTitle: "Back-End & Database"
moduleEmoji: "🗄️"
moduleColor: "from-emerald-500 to-teal-700"
moduleBorderColor: "border-emerald-500/50"
moduleAccentColor: "text-emerald-400"
order: 3
title: "MySQL & SQL"
icon: "🗃️"
description: "Menyimpan, membaca, dan mengelola data dengan database."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **DDL — Data Definition Language:** `CREATE`, `ALTER`, `DROP`.
- **DML — Data Manipulation Language:** `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **Filtering:** `WHERE`, `LIKE`, `BETWEEN`, `IN`.
- **Sorting & Limit:** `ORDER BY`, `LIMIT`, `OFFSET`.
- **Relasi:** `JOIN` — menggabungkan data dari beberapa tabel.
- **Aggregate:** `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`.
- **Index:** Mempercepat pencarian data.

## Contoh Kode

```sql
-- Membuat Database & Tabel
CREATE DATABASE sekolah_db;
USE sekolah_db;

CREATE TABLE siswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  kelas INT NOT NULL,
  email VARCHAR(150) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menambah Data (INSERT)
INSERT INTO siswa (nama, kelas, email)
VALUES
  ('Budi Santoso', 11, 'budi@smk.sch.id'),
  ('Sari Dewi', 11, 'sari@smk.sch.id'),
  ('Agus Prasetyo', 12, 'agus@smk.sch.id');

-- Membaca Data (SELECT)
SELECT * FROM siswa WHERE kelas = 11;
SELECT nama, email FROM siswa ORDER BY nama ASC;

-- Mengupdate Data (UPDATE)
UPDATE siswa SET kelas = 12 WHERE id = 1;

-- Menghapus Data (DELETE)
DELETE FROM siswa WHERE id = 3;
```

## Latihan

1. Buat database `toko_db` dengan tabel `produk` (id, nama, harga, stok).
2. Insert 5 data produk.
3. Tulis query untuk menampilkan produk yang harganya antara 10.000 — 50.000.
4. Tulis query JOIN antara tabel `siswa` dan tabel `nilai`.
