// sw.js - place in your root directory
const CACHE_NAME = 'warframe-v2';
const ASSETS = [
  '/Warframe-Daily-Checklist/',
  '/Warframe-Daily-Checklist/index.html',
  '/Warframe-Daily-Checklist/manifest.json',
  '/Warframe-Daily-Checklist/css/styles.css',
  '/Warframe-Daily-Checklist/js/app.js',
  '/Warframe-Daily-Checklist/icons/icon-192.png',
  '/Warframe-Daily-Checklist/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});
