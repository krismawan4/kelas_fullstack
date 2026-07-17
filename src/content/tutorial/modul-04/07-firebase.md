---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 7
title: "Vue.js & Firebase — Studi Kasus Blog"
icon: "🔥"
description: "Membangun aplikasi fullstack tanpa backend sendiri menggunakan Backend-as-a-Service (BaaS)."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- **Konsep BaaS (Backend as a Service):** Fokus ke Frontend, biarkan Firebase menangani Backend, Database, dan Autentikasi.
- **Firebase Authentication:** Login menggunakan Email/Password dan Google (OAuth).
- **Cloud Firestore:** Database NoSQL yang real-time dan fleksibel.
- **Firebase Storage:** Mengunggah dan menyimpan file (gambar, dokumen).
- **Integrasi Vue + Firebase:** Cara menghubungkan Firebase SDK ke dalam aplikasi Vue.js.

## Contoh Kode (Firestore Read/Write)

```javascript
// Konfigurasi firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Menambahkan Artikel Baru (Write)
async function tambahArtikel(judul, konten) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      judul: judul,
      konten: konten,
      tanggal: new Date()
    });
    console.log("Artikel tersimpan dengan ID: ", docRef.id);
  } catch (e) {
    console.error("Gagal menambah data: ", e);
  }
}

// Mengambil Semua Artikel (Read)
async function ambilArtikel() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
```

## Latihan

1. Buat proyek Firebase baru di Firebase Console.
2. Integrasikan Firebase ke aplikasi Vue.js Anda.
3. Buat fitur login sederhana menggunakan Google Authentication.
4. Buat halaman CRUD (Create, Read, Update, Delete) untuk daftar Todo atau Artikel Blog menggunakan Cloud Firestore.
