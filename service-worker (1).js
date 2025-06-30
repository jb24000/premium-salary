
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("salary-calc-cache").then(function (cache) {
      return cache.addAll([
        "./salary-calculator-pwa.html",
        "./manifest.json",
        "./"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
