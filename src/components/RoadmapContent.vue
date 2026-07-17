<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'

const modules = ref([
  {
    id: 1,
    emoji: '🖥️',
    title: 'Tools & Dasar',
    description: 'Persiapan & pondasi sebelum coding',
    color: 'from-violet-500 to-purple-600',
    badgeColor: 'bg-violet-100 text-violet-800',
    progress: 0,
    topics: [
      { name: 'Algoritma & Logika', tag: 'Dasar', icon: '🧠' },
      { name: 'Terminal & VS Code', tag: 'Tools', icon: '⌨️' },
      { name: 'Git & GitHub', tag: 'Wajib', icon: '📦' },
    ]
  },
  {
    id: 2,
    emoji: '🎨',
    title: 'UI/UX Design',
    description: 'Rancang sebelum kamu membangun',
    color: 'from-pink-500 to-rose-600',
    badgeColor: 'bg-pink-100 text-pink-800',
    progress: 0,
    topics: [
      { name: 'Desain dengan Figma', tag: 'Tools', icon: '🖌️' },
      { name: 'Prinsip UI/UX', tag: 'Konsep', icon: '💡' },
      { name: 'Re-design Website', tag: 'Praktik', icon: '🔄' },
    ]
  },
  {
    id: 3,
    emoji: '🌐',
    title: 'Front-End Basic',
    description: 'Tampilan & interaktivitas web',
    color: 'from-orange-500 to-amber-600',
    badgeColor: 'bg-orange-100 text-orange-800',
    progress: 0,
    topics: [
      { name: 'HTML & CSS Dasar', tag: 'Fondasi', icon: '📄' },
      { name: 'Bootstrap 5', tag: 'Framework', icon: '⚡' },
      { name: 'JavaScript Dasar', tag: 'Penting', icon: '✨' },
      { name: 'DOM & Event', tag: 'Interaktif', icon: '🖱️' },
      { name: 'Async JS & API', tag: 'Lanjutan', icon: '🔗' },
    ]
  },
  {
    id: 4,
    emoji: '⚛️',
    title: 'Front-End Pro',
    description: 'Framework industri modern',
    color: 'from-sky-500 to-blue-600',
    badgeColor: 'bg-sky-100 text-sky-800',
    progress: 0,
    topics: [
      { name: 'Tailwind CSS', tag: 'Styling', icon: '💨' },
      { name: 'Vue.js 3', tag: 'Populer', icon: '💚' },
      { name: 'React.js', tag: 'Industri', icon: '⚛️' },
      { name: 'Astro.js', tag: 'Modern', icon: '🚀' },
    ]
  },
  {
    id: 5,
    emoji: '🗄️',
    title: 'Back-End',
    description: 'Logika server & database',
    color: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    progress: 0,
    topics: [
      { name: 'PHP 8 Dasar', tag: 'Server', icon: '🐘' },
      { name: 'OOP PHP', tag: 'Lanjutan', icon: '🏗️' },
      { name: 'MySQL & SQL', tag: 'Database', icon: '🗃️' },
      { name: 'PHP + MySQL CRUD', tag: 'Praktik', icon: '⚙️' },
    ]
  },
])

const checkedTopics = ref<Record<string, boolean>>({})

const totalTopics = modules.value.reduce((sum, m) => sum + m.topics.length, 0)
const completedTopics = ref(0)

function toggleTopic(moduleId: number, topicIdx: number) {
  const key = `${moduleId}-${topicIdx}`
  checkedTopics.value[key] = !checkedTopics.value[key]
  completedTopics.value = Object.values(checkedTopics.value).filter(Boolean).length

  const mod = modules.value.find(m => m.id === moduleId)
  if (mod) {
    const done = mod.topics.filter((_, i) => checkedTopics.value[`${moduleId}-${i}`]).length
    mod.progress = Math.round((done / mod.topics.length) * 100)
  }
}

const overallProgress = ref(0)
function updateOverall() {
  overallProgress.value = Math.round((completedTopics.value / totalTopics) * 100)
}

function toggleTopicAndUpdate(moduleId: number, topicIdx: number) {
  toggleTopic(moduleId, topicIdx)
  updateOverall()
}

const projects = [
  { title: 'Website Portofolio', tech: 'HTML + Tailwind CSS', emoji: '🎯', color: 'bg-violet-50 border-violet-200' },
  { title: 'UI E-Wallet & Crowd Funding', tech: 'Figma → HTML', emoji: '💰', color: 'bg-pink-50 border-pink-200' },
  { title: 'Aplikasi Split Bill', tech: 'React.js', emoji: '🧾', color: 'bg-sky-50 border-sky-200' },
  { title: 'Website Blog', tech: 'Vue.js 3 + Firebase', emoji: '📝', color: 'bg-emerald-50 border-emerald-200' },
  { title: 'Sistem CRUD Dinamis', tech: 'PHP + MySQL', emoji: '⚙️', color: 'bg-orange-50 border-orange-200' },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
    <!-- Hero Section -->
    <div class="relative overflow-hidden px-6 py-16 text-center">
      <div class="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-teal-600/20" />
      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6 border border-white/20">
          <span>🏫</span> SMK Bhakti — Kelas Fullstack Web Developer
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
          Roadmap Fullstack<br/>Web Developer
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Dari nol hingga siap kerja. Ikuti langkah-langkah berikut dan jadilah developer handal! 💪
        </p>

        <!-- Overall Progress -->
        <div class="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm font-medium text-slate-300">Progress Belajarmu</span>
            <span class="text-2xl font-bold text-white">{{ overallProgress }}%</span>
          </div>
          <Progress :model-value="overallProgress" class="h-3 bg-white/20" />
          <p class="text-xs text-slate-400 mt-2">{{ completedTopics }} / {{ totalTopics }} topik selesai</p>
        </div>
      </div>
    </div>

    <!-- Alert Info -->
    <div class="max-w-5xl mx-auto px-6 mb-8">
      <Alert variant="info" class="border-blue-400/50 bg-blue-900/30 text-blue-100 backdrop-blur-sm">
        <AlertTitle>💡 Cara Menggunakan Roadmap Ini</AlertTitle>
        <AlertDescription class="text-blue-200 mt-1">
          Centang setiap topik yang sudah kamu pelajari. Progress akan terupdate otomatis! Kerjakan secara berurutan dari modul 1 sampai 5.
        </AlertDescription>
      </Alert>
    </div>

    <!-- Modules Grid -->
    <div class="max-w-5xl mx-auto px-6 pb-12">
      <h2 class="text-2xl font-bold mb-6 text-slate-200">📚 Modul Pembelajaran</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card
          v-for="mod in modules"
          :key="mod.id"
          class="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <CardHeader class="pb-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div :class="`bg-gradient-to-br ${mod.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg`">
                  {{ mod.emoji }}
                </div>
                <div>
                  <CardTitle class="text-white text-base">{{ mod.id }}. {{ mod.title }}</CardTitle>
                  <p class="text-slate-400 text-xs mt-0.5">{{ mod.description }}</p>
                </div>
              </div>
              <span class="text-sm font-bold text-white">{{ mod.progress }}%</span>
            </div>
            <Progress :model-value="mod.progress" class="h-1.5 bg-white/10 mt-3" />
          </CardHeader>
          <CardContent>
            <ul class="space-y-2">
              <li
                v-for="(topic, idx) in mod.topics"
                :key="idx"
                @click="toggleTopicAndUpdate(mod.id, idx)"
                :class="`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${checkedTopics[`${mod.id}-${idx}`] ? 'bg-green-500/20' : 'hover:bg-white/10'}`"
              >
                <div :class="`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${checkedTopics[`${mod.id}-${idx}`] ? 'bg-green-500 border-green-500' : 'border-slate-500'}`">
                  <svg v-if="checkedTopics[`${mod.id}-${idx}`]" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-lg">{{ topic.icon }}</span>
                <span :class="`text-sm flex-1 ${checkedTopics[`${mod.id}-${idx}`] ? 'line-through text-slate-500' : 'text-slate-200'}`">
                  {{ topic.name }}
                </span>
                <Badge :class="`text-xs px-2 py-0.5 ${mod.badgeColor} border-0`">
                  {{ topic.tag }}
                </Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <!-- Projects Section -->
      <h2 class="text-2xl font-bold mb-6 text-slate-200">🎯 Proyek Portofolio</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="rounded-xl border bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="text-3xl mb-3">{{ project.emoji }}</div>
          <h3 class="font-semibold text-white text-sm mb-1">{{ project.title }}</h3>
          <p class="text-xs text-slate-400">{{ project.tech }}</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 text-slate-500 text-sm">
        <p>Dibuat dengan ❤️ untuk siswa SMK Bhakti • Fullstack Web Developer Class</p>
      </div>
    </div>
  </div>
</template>
