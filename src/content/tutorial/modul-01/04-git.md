---
module: "modul-01"
moduleTitle: "Tools & Algoritma"
moduleEmoji: "🖥️"
moduleColor: "from-violet-500 to-purple-700"
moduleBorderColor: "border-violet-500/50"
moduleAccentColor: "text-violet-400"
order: 4
title: "Git & Version Control"
icon: "📦"
description: "Mengelola perubahan kode dan berkolaborasi dengan tim."
duration: "2 Minggu"
---

## Apa yang Dipelajari

- `git init` — Inisialisasi repositori Git baru.
- `git add .` — Menyiapkan semua perubahan untuk di-commit.
- `git commit -m "pesan"` — Menyimpan snapshot kode.
- `git push` — Mengunggah kode ke GitHub.
- `git pull` — Mengunduh perubahan terbaru.
- **Branching:** `git branch`, `git checkout -b fitur-baru`.
- **Merge & Conflict:** Cara menggabungkan perubahan.

## Contoh Kode

```bash
# Alur kerja Git sehari-hari

# 1. Clone proyek dari GitHub
git clone https://github.com/user/repo.git

# 2. Buat branch baru untuk fitur
git checkout -b fitur-login

# 3. Setelah coding, simpan perubahan
git add .
git commit -m "feat: tambah halaman login"

# 4. Upload ke GitHub
git push origin fitur-login
```

## Alur Git Visual

```
main ──●──●──●──────────●── (merge)
              \        /
fitur-login    ●──●──● (branch)
```

## Latihan

1. Buat repositori baru di GitHub.
2. Clone ke komputer lokal.
3. Buat branch baru, tambah file, commit, dan push.
4. Buat Pull Request di GitHub.
