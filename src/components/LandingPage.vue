<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => { isVisible.value = true }, 100)
})

const stats = [
  { number: '5', label: 'Modul Lengkap', icon: '📚' },
  { number: '20+', label: 'Topik Pembelajaran', icon: '🎯' },
  { number: '5', label: 'Proyek Nyata', icon: '🚀' },
  { number: '100%', label: 'Siap Kerja', icon: '💼' },
]

const modules = [
  {
    num: '01',
    emoji: '🖥️',
    title: 'Tools & Algoritma',
    desc: 'Terminal, VS Code, Git, GitHub, dan logika pemrograman dasar.',
    color: 'from-violet-500 to-purple-700',
    tags: ['Git', 'Terminal', 'Algoritma'],
  },
  {
    num: '02',
    emoji: '🎨',
    title: 'UI/UX Design',
    desc: 'Merancang tampilan web yang cantik dan mudah digunakan dengan Figma.',
    color: 'from-pink-500 to-rose-700',
    tags: ['Figma', 'UI', 'UX'],
  },
  {
    num: '03',
    emoji: '🌐',
    title: 'Front-End Basic',
    desc: 'HTML, CSS, Bootstrap, dan JavaScript dari dasar hingga mahir.',
    color: 'from-orange-500 to-amber-700',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    num: '04',
    emoji: '⚛️',
    title: 'Front-End Pro',
    desc: 'Framework modern: Tailwind CSS, Vue.js 3, React.js, dan Astro.',
    color: 'from-sky-500 to-blue-700',
    tags: ['Vue.js', 'React', 'Tailwind'],
  },
  {
    num: '05',
    emoji: '🗄️',
    title: 'Back-End & Database',
    desc: 'PHP 8, OOP, MySQL, dan membangun sistem CRUD dinamis.',
    color: 'from-emerald-500 to-teal-700',
    tags: ['PHP', 'MySQL', 'CRUD'],
  },
]

const projects = [
  { emoji: '🎯', title: 'Website Portofolio', tech: 'HTML + Tailwind CSS' },
  { emoji: '💰', title: 'UI E-Wallet', tech: 'Figma + HTML/CSS' },
  { emoji: '🧾', title: 'Aplikasi Split Bill', tech: 'React.js' },
  { emoji: '📝', title: 'Website Blog', tech: 'Vue.js 3 + Firebase' },
  { emoji: '⚙️', title: 'Sistem CRUD', tech: 'PHP + MySQL' },
]

const features = [
  { icon: '✅', title: 'Kurikulum Terstruktur', desc: 'Materi disusun dari dasar hingga mahir secara bertahap dan sistematis.' },
  { icon: '🎓', title: 'Proyek Nyata', desc: 'Setiap modul diakhiri dengan membangun proyek yang bisa masuk portofolio.' },
  { icon: '📊', title: 'Tracking Progress', desc: 'Pantau perkembangan belajarmu dengan checklist interaktif per topik.' },
  { icon: '💡', title: 'Materi Industri', desc: 'Teknologi yang diajarkan adalah yang paling banyak dicari di industri saat ini.' },
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white overflow-x-hidden font-['Inter']">

    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-slate-950/80 border-b border-white/5">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-sm font-black">
          F
        </div>
        <span class="font-bold text-lg tracking-tight">Fullstack<span class="text-violet-400">Dev</span></span>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm text-slate-400">
        <a href="#modul" class="hover:text-white transition-colors">Modul</a>
        <a href="#proyek" class="hover:text-white transition-colors">Proyek</a>
        <a href="#fitur" class="hover:text-white transition-colors">Fitur</a>
      </div>
      <a
        href="/tutorial"
        class="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/20"
      >
        Mulai Belajar →
      </a>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <!-- Animated gradient blobs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s" />

      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-4 py-1.5 text-sm text-violet-300 mb-8">
          <span class="w-2 h-2 bg-violet-400 rounded-full animate-ping" />
          SMK Bhakti • Program Kelas Fullstack 2025/2026
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-black leading-tight mb-6">
          Jadilah
          <span class="bg-gradient-to-r from-violet-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Fullstack
          </span>
          <br />Web Developer
        </h1>

        <p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kurikulum lengkap dari nol hingga siap kerja. Pelajari HTML, CSS, JavaScript, Vue.js, React, PHP, MySQL dan masih banyak lagi. <strong class="text-white">Gratis untuk siswa SMK Bhakti.</strong>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/tutorial"
            class="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 text-base"
          >
            🚀 Mulai Roadmap
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#modul"
            class="flex items-center gap-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base"
          >
            📚 Lihat Kurikulum
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span class="text-xs">scroll ke bawah</span>
        <div class="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-bounce" />
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 px-6">
      <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="relative group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
        >
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-4xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{{ stat.number }}</div>
          <div class="text-sm text-slate-400 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Modules Section -->
    <section id="modul" class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-4">Kurikulum</div>
          <h2 class="text-4xl md:text-5xl font-black mb-4">5 Modul <span class="text-orange-400">Terstruktur</span></h2>
          <p class="text-slate-400 text-lg max-w-xl mx-auto">Setiap modul dirancang untuk membawamu ke level berikutnya secara bertahap.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="mod in modules"
            :key="mod.num"
            class="group relative bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden"
          >
            <!-- gradient glow on hover -->
            <div :class="`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`" />

            <div class="relative z-10">
              <div class="flex items-start justify-between mb-4">
                <div :class="`bg-gradient-to-br ${mod.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg`">
                  {{ mod.emoji }}
                </div>
                <span class="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">{{ mod.num }}</span>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">{{ mod.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ mod.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in mod.tags"
                  :key="tag"
                  class="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="fitur" class="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm px-4 py-1.5 rounded-full mb-4">Keunggulan</div>
          <h2 class="text-4xl md:text-5xl font-black mb-4">Kenapa Kelas <span class="text-teal-400">Ini?</span></h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="feat in features"
            :key="feat.title"
            class="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300"
          >
            <div class="text-3xl mt-0.5 flex-shrink-0">{{ feat.icon }}</div>
            <div>
              <h3 class="font-bold text-white mb-1">{{ feat.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="proyek" class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <div class="inline-block bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm px-4 py-1.5 rounded-full mb-4">Portofolio</div>
          <h2 class="text-4xl md:text-5xl font-black mb-4">5 Proyek <span class="text-pink-400">Nyata</span></h2>
          <p class="text-slate-400 text-lg max-w-xl mx-auto">Kamu tidak hanya belajar teori — kamu juga membangun proyek sungguhan yang bisa dipamerkan.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="(proj, idx) in projects"
            :key="idx"
            class="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 cursor-default"
          >
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{{ proj.emoji }}</div>
            <h3 class="font-semibold text-white text-sm mb-1">{{ proj.title }}</h3>
            <p class="text-xs text-slate-500">{{ proj.tech }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6">
      <div class="max-w-3xl mx-auto text-center relative">
        <div class="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-teal-600/10 rounded-3xl blur-xl" />
        <div class="relative bg-white/5 border border-white/10 rounded-3xl p-12">
          <div class="text-5xl mb-6">🎓</div>
          <h2 class="text-4xl font-black mb-4">Siap Memulai <span class="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">Perjalananmu?</span></h2>
          <p class="text-slate-400 text-lg mb-8">Bergabung sekarang dan mulai belajar dari Modul 1. Masa depanmu sebagai developer dimulai hari ini.</p>
          <a
            href="/tutorial"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30"
          >
            🚀 Mulai Roadmap Sekarang
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-8 px-6 text-center text-slate-600 text-sm">
      <p>© 2025/2026 <span class="text-slate-400 font-semibold">SMK Bhakti</span> • Kelas Fullstack Web Developer • Dibuat dengan ❤️</p>
    </footer>

  </div>
</template>
