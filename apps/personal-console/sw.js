const CACHE_NAME = 'my-life-os-personal-console-v0.1.0';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  '../../icon.png'
];

function safeCacheAssets(cache, assets) {
  return Promise.allSettled(
    assets.map((asset) => fetch(asset, { cache: 'reload' })
      .then((response) => {
        if (!response || !response.ok) return null;
        return cache.put(asset, response);
      })
      .catch(() => null))
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => safeCacheAssets(cache, ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, copy).catch(() => {});
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
