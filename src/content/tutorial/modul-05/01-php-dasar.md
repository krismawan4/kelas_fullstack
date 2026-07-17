---
module: "modul-05"
moduleTitle: "Back-End & Database"
moduleEmoji: "🗄️"
moduleColor: "from-emerald-500 to-teal-700"
moduleBorderColor: "border-emerald-500/50"
moduleAccentColor: "text-emerald-400"
order: 1
title: "PHP 8 Dasar"
icon: "🐘"
description: "Bahasa server-side paling populer untuk web."
duration: "4 Minggu"
---

## Apa yang Dipelajari

- **Cara kerja PHP:** Client → Server → Database → Response.
- **Variabel & Tipe Data:** `$nama = "Budi"`, `$umur = 17`.
- **Array:** Array biasa dan associative array.
- **String Functions:** `strlen()`, `strtoupper()`, `str_replace()`.
- **Array Functions:** `array_push()`, `count()`, `array_filter()`.
- **Include & Require:** Memecah kode PHP menjadi file terpisah.
- **Superglobal:** `$_GET`, `$_POST`, `$_SESSION`, `$_COOKIE`.

## Contoh Kode

```php
<?php
// PHP Dasar

// 1. Variabel
$nama = "Budi Santoso";
$umur = 17;
$nilai = [85, 90, 70, 95];

// 2. String
echo "Halo, $nama! Umurmu $umur tahun.<br>";
echo strtoupper($nama) . "<br>"; // BUDI SANTOSO

// 3. Array & Perulangan
$rata = array_sum($nilai) / count($nilai);
echo "Rata-rata: $rata<br>"; // 85

// 4. Foreach
foreach ($nilai as $index => $n) {
  echo "Nilai ke-" . ($index + 1) . ": $n<br>";
}

// 5. Function
function salam($nama, $waktu = "pagi") {
  return "Selamat $waktu, $nama!";
}

echo salam("Budi", "siang");
?>
```

## Latihan

1. Buat file PHP yang menampilkan "Hello World" di browser.
2. Buat fungsi yang menerima array nilai dan mengembalikan yang tertinggi.
3. Buat form HTML yang mengirim data ke file PHP menggunakan `$_POST`.
