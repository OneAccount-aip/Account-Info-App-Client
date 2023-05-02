const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/styles/main.css',
    '/scripts/main.js',
    '/service-worker.js'
];

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered successfully');
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}

self.addEventListener('install', function(event) {
    // 캐시 생성 및 파일 저장
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('activate', function(event) {
    // 이전 버전 캐시 삭제
    let cacheWhitelist = ['my-site-cache-v1'];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener('fetch', function(event) {
    // console.log('Fetch event:', event);
    event.respondWith(
        fetch(event.request)
            .then(function(response) {
                // console.log('Fetch response:', response);
                return response;
            })
            .catch(function(error) {
                console.log('Fetch error:', error);
                throw error;
            })
    );
});