const cacheName = 'my-app-cache-v1';
const cacheFiles = [
  '/',
  '/index.html',
  // 필요한 정적 리소스를 여기에 추가 (예: 이미지, CSS, JS 파일)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});