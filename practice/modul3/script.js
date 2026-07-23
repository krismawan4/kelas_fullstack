document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.getElementById('user-grid');
    const loading = document.getElementById('loading');

    // 1. Lakukan Fetch API ke endpoint JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal mengambil data dari server');
            }
            return response.json();
        })
        .then(users => {
            // Sembunyikan indikator loading
            loading.classList.add('hidden');
            
            // Tampilkan container grid
            userGrid.classList.remove('hidden');

            // 2. Lakukan perulangan untuk setiap user
            users.forEach(user => {
                // Buat elemen card untuk user
                const card = document.createElement('div');
                card.className = 'user-card bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 group cursor-pointer relative overflow-hidden';
                
                // Efek glow / gradient yang menarik (Tailwind)
                card.innerHTML = `
                    <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center space-x-4 mb-5">
                            <div class="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/20">
                                ${user.name.charAt(0)}
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors">${user.name}</h2>
                                <p class="text-sm text-slate-400">@${user.username}</p>
                            </div>
                        </div>
                        
                        <div class="space-y-3 mt-4 pt-4 border-t border-slate-700/50 text-sm text-slate-300">
                            <!-- Email -->
                            <div class="flex items-center group/item hover:text-white transition-colors">
                                <div class="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center mr-3 group-hover/item:bg-orange-500/20 group-hover/item:text-orange-400 transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span class="truncate" title="${user.email}">${user.email}</span>
                            </div>
                            
                            <!-- Website -->
                            <div class="flex items-center group/item hover:text-white transition-colors">
                                <div class="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center mr-3 group-hover/item:bg-orange-500/20 group-hover/item:text-orange-400 transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                </div>
                                <span>${user.website}</span>
                            </div>
                            
                            <!-- Company -->
                            <div class="flex items-center group/item hover:text-white transition-colors">
                                <div class="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center mr-3 group-hover/item:bg-orange-500/20 group-hover/item:text-orange-400 transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                </div>
                                <span class="font-medium text-orange-300/80">${user.company.name}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Tambahkan elemen ke dalam grid
                userGrid.appendChild(card);
            });

            // 3. Gunakan Anime.js untuk membuat animasi masuk yang memukau
            anime({
                targets: '.user-card',
                translateY: [30, 0],
                opacity: [0, 1],
                delay: anime.stagger(80, {start: 100}), // Animasi beruntun dengan jarak 80ms
                easing: 'easeOutElastic(1, .8)', // Memberikan efek memantul yang halus
                duration: 1000
            });
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            loading.innerHTML = `
                <div class="bg-red-500/20 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl flex items-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Gagal memuat data! Periksa koneksi internet Anda.</span>
                </div>
            `;
            loading.classList.remove('animate-pulse');
        });
});
