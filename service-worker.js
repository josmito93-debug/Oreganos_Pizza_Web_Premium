const CACHE_NAME = 'oreganos-pizza-v1';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'config.js',
  'app.js',
  'manifest.webmanifest',
  'assets/logo.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/hero-classic.png',
  'assets/hero-premium.png',
  'assets/hero-dessert.png',
  'assets/hero-sides.png',
  'assets/profile.jpg',
  'assets/menu-clasicas.jpg',
  'assets/menu-premium.jpg',
  'assets/menu-especiales.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
