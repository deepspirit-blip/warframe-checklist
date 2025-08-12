const CACHE_NAME = 'warframe-checklist-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',  // If you split CSS later
  '/script.js'    // If you split JS later
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});