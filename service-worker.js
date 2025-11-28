
const CACHE_NAME = "wordbook-cache-v1";
const urlsToCache = ["index.html","style.css","app.js"];

self.addEventListener("install", event => {
    event.waitUntill(
        caches.open(CACHE_NAME).then(Cache => caches.addAll(urlsToCache))
    );
});

self.addEventListener("fetch",event => {
    event.responWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});