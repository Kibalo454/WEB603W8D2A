// sw.js (project root)
var cacheName = "hello-pwa-v1";
var filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/manifest.json",
  "/favicon.ico",
  "/images/hello-icon-128.png",
  "/images/hello-icon-144.png",
  "/images/hello-icon-152.png",
  "/images/hello-icon-192.png",
  "/images/hello-icon-256.png",
  "/images/hello-icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
