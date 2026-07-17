---
module: "modul-01"
moduleTitle: "Tools & Algoritma"
moduleEmoji: "🖥️"
moduleColor: "from-violet-500 to-purple-700"
moduleBorderColor: "border-violet-500/50"
moduleAccentColor: "text-violet-400"
order: 5
title: "Mengenal Pemrograman Komputer"
icon: "💻"
description: "Pengenalan dasar tentang komputer, program, dan profesi developer."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- **Konsep Komputer:** Bagaimana komputer bekerja.
- **Apa itu Program:** Kumpulan instruksi untuk komputer.
- **Profesi Developer:** Peran dan tanggung jawab seorang Software Engineer.
- **Package Manager:** Pengenalan singkat NPM/Yarn.

## Materi Video

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1T3A_pXmhzg" title="Pengenalan Pemrograman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-xl my-6"></iframe>

### Rangkuman Video: Mengapa Komputer Hanya Paham 0 dan 1?

Video di atas menjelaskan fondasi paling dasar dari cara kerja komputer, yaitu **Sistem Biner (Binary System)**. Berikut adalah poin-poin utamanya:

- **Bahasa Mesin:** Pada dasarnya, komputer adalah kumpulan jutaan sakelar elektronik berukuran mikro (transistor). Angka **1** mewakili arus listrik menyala (*ON*), dan **0** mewakili arus listrik mati (*OFF*).
- **Pengolahan Data:** Semua bentuk data yang ada di *smartphone* atau komputer kita—baik itu teks, gambar, foto, musik, maupun video—pada akhirnya diterjemahkan dan diproses sebagai barisan angka 0 dan 1.
- **Penerjemah:** Sebagai programmer, kita tidak perlu menulis kode dengan 0 dan 1 secara langsung. Kita menulis program menggunakan *bahasa pemrograman* (seperti JavaScript, PHP, atau Python), yang kemudian akan diterjemahkan oleh komputer menjadi bahasa biner agar bisa dieksekusi oleh mesin. Terdapat dua jenis penerjemah utama dalam pemrograman:
  - **Compiler (Kompilator):** Menerjemahkan seluruh kode program menjadi bahasa mesin sekaligus sebelum program dijalankan (contoh: C++, Java, Go).
  - **Interpreter:** Menerjemahkan dan mengeksekusi kode program baris demi baris secara langsung saat program sedang berjalan (contoh: JavaScript, PHP, Python).

## Latihan

Berdasarkan materi konseptual dan video di atas, kerjakan soal-soal berikut:

<details>
  <summary><strong>1. Apa perbedaan utama antara <em>Compiler</em> dan <em>Interpreter</em> dalam menerjemahkan kode bahasa pemrograman?</strong></summary>
  
  > **Jawaban:**
  > *Compiler* menerjemahkan seluruh kode program menjadi bahasa mesin sekaligus **sebelum** program dijalankan (misal: C++, Java). Sedangkan *Interpreter* menerjemahkan dan langsung mengeksekusi kode baris demi baris **saat** program sedang berjalan (misal: JavaScript, PHP, Python).
</details>

<details>
  <summary><strong>2. Jelaskan dengan bahasa Anda sendiri, mengapa komputer menggunakan sistem bilangan biner (0 dan 1)?</strong></summary>

  > **Jawaban:**
  > Komputer pada level paling dasar dibangun dari jutaan sakelar elektronik berukuran mikro (transistor). Angka biner 1 dan 0 adalah representasi paling natural dari kondisi fisik transistor tersebut: **1** untuk arus listrik mengalir (ON) dan **0** untuk arus listrik terputus (OFF).
</details>

<details>
  <summary><strong>3. Jika semua data di komputer pada akhirnya berupa 0 dan 1, bagaimana cara komputer bisa membedakan mana yang berupa teks dan mana yang berupa gambar?</strong></summary>

  > **Jawaban:**
  > Komputer menggunakan konteks format (*metadata*) dan software (program) yang sesuai untuk membacanya. Software pengolah teks akan menerjemahkan barisan 0 dan 1 tersebut menggunakan standar huruf (seperti ASCII/UTF-8), sedangkan software *viewer* gambar akan membacanya sebagai instruksi pixel warna di layar.
</details>

<details>
  <summary><strong>4. Cari tahu apa tugas utama dari seorang Fullstack Web Developer.</strong></summary>

  > **Jawaban:**
  > Fullstack Web Developer adalah seseorang yang memiliki tanggung jawab penuh untuk merancang dan mengembangkan sebuah aplikasi web secara menyeluruh. Ia mengerjakan bagian **Frontend** (antarmuka yang dilihat/diklik pengguna) sekaligus **Backend** (server, pemrosesan logika bisnis, dan database).
</details>