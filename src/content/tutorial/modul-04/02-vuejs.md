---
module: "modul-04"
moduleTitle: "Front-End Pro"
moduleEmoji: "⚛️"
moduleColor: "from-sky-500 to-blue-700"
moduleBorderColor: "border-sky-500/50"
moduleAccentColor: "text-sky-400"
order: 2
title: "Vue.js 3 — Composition API"
icon: "💚"
description: "Framework JavaScript progresif yang reaktif dan mudah dipelajari."
duration: "5 Minggu"
---

## Apa yang Dipelajari

- **`ref()` & `reactive()`:** Membuat data yang reaktif.
- **`computed()`:** Nilai yang dihitung otomatis dari data lain.
- **`watch()`:** Memantau perubahan data.
- **Lifecycle Hooks:** `onMounted()`, `onUnmounted()`.
- **Direktif penting:** `v-bind`, `v-model`, `v-if`, `v-for`, `v-on`.
- **Component:** Memecah UI menjadi bagian kecil yang bisa dipakai ulang.
- **Pinia:** State management untuk data global.
- **Vue Router:** Navigasi antar halaman (SPA).

## Contoh Kode

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// Data reaktif
const siswa = ref([])
const pencarian = ref('')

// Data yang dihitung otomatis
const hasilFilter = computed(() =>
  siswa.value.filter(s =>
    s.nama.toLowerCase().includes(pencarian.value.toLowerCase())
  )
)

// Ambil data saat komponen siap
onMounted(async () => {
  const res = await fetch('/api/siswa')
  siswa.value = await res.json()
})
</script>

<template>
  <div>
    <input
      v-model="pencarian"
      placeholder="Cari siswa..."
      class="border rounded-lg px-4 py-2 w-full"
    />
    
    <div v-for="s in hasilFilter" :key="s.id" class="p-4 border-b">
      <h3 class="font-semibold">{{ s.nama }}</h3>
      <p class="text-gray-500">{{ s.kelas }}</p>
    </div>

    <p v-if="hasilFilter.length === 0" class="text-center text-gray-400">
      Data tidak ditemukan.
    </p>
  </div>
</template>
```

## Latihan

1. Buat komponen counter sederhana dengan `ref()` dan tombol increment/decrement.
2. Buat komponen pencarian yang memfilter daftar nama secara reaktif.
3. Buat multi-page app sederhana dengan Vue Router (Home, About, Contact).
