---
module: "modul-05"
moduleTitle: "Back-End & Database"
moduleEmoji: "🗄️"
moduleColor: "from-emerald-500 to-teal-700"
moduleBorderColor: "border-emerald-500/50"
moduleAccentColor: "text-emerald-400"
order: 2
title: "OOP PHP (Object Oriented)"
icon: "🏗️"
description: "Menulis kode PHP yang terstruktur, modular, dan mudah dikelola."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Class & Object:** Blueprint dan instansiasi.
- **Properties & Methods:** Data dan fungsi milik sebuah class.
- **Constructor:** `__construct()` — dijalankan saat objek dibuat.
- **Encapsulation:** `public`, `private`, `protected`.
- **Inheritance:** Class anak mewarisi sifat class induk.
- **Interface & Abstract Class:** Kontrak untuk konsistensi kode.
- **PDO:** Database abstraction layer yang aman (anti SQL Injection).

## Contoh Kode

```php
<?php
class Siswa {
  // Properties
  private string $nama;
  private int $kelas;
  private float $rataRataNilai;

  // Constructor
  public function __construct(
    string $nama,
    int $kelas
  ) {
    $this->nama = $nama;
    $this->kelas = $kelas;
  }

  // Methods
  public function getNama(): string {
    return $this->nama;
  }

  public function tambahNilai(float $nilai): void {
    $this->rataRataNilai = $nilai;
  }

  public function getLulus(): bool {
    return $this->rataRataNilai >= 75;
  }

  public function getInfo(): string {
    $status = $this->getLulus() ? "Lulus ✅" : "Remedial ❌";
    return "{$this->nama} (Kelas {$this->kelas}) — $status";
  }
}

// Penggunaan
$siswa = new Siswa("Budi", 11);
$siswa->tambahNilai(88);
echo $siswa->getInfo();
// Budi (Kelas 11) — Lulus ✅
```

## Latihan

1. Buat class `Guru` dengan properties nama, mapel, dan jadwal.
2. Buat class `Kelas` yang berisi array of `Siswa` dan method untuk menghitung rata-rata nilai kelas.
3. Implementasikan inheritance: buat class `SiswaOsis` yang extend dari `Siswa`.
