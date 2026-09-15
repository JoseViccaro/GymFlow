const CACHE_NAME = 'gymflow-cache-v7';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './js/main.js',
  './js/ui.js',
  './js/actions.js',
  './js/state.js',
  './js/calculators.js',
  './js/database.js',
  './js/timer.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './apple-touch-icon.png',
  './favicon.ico',
  './assets/exercises/squat.gif',
  './assets/exercises/pushup.gif',
  './assets/exercises/bench.gif',
  './assets/exercises/row.gif',
  './assets/exercises/deadlift.gif',
  './assets/exercises/shoulder.gif',
  './assets/exercises/lunge.gif',
  './assets/exercises/core.gif',
  './assets/exercises/calves.gif',
  './assets/exercises/burpee.gif'
];

// Install Event: Cache assets and immediately activate
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets for', CACHE_NAME);
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event: Delete old caches and take immediate control of all open pages
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()).then(() => {
      return self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'RELOAD_PAGE' });
          if ('navigate' in client) {
            client.navigate(client.url);
          }
        });
      });
    })
  );
});

// Message listener to allow client to force immediate skipWaiting
self.addEventListener('message', (e) => {
  if (e.data && (e.data.type === 'SKIP_WAITING' || e.data === 'skipWaiting')) {
    self.skipWaiting();
  }
});

// Fetch Event - Cache First Strategy
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).then((networkResponse) => {
        // Cache new dynamically loaded files if any
        if (networkResponse.status === 200 && e.request.url.startsWith(self.location.origin)) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      // Fallback for offline
    })
  );
});
