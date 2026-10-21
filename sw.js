// Cache de l'app Retour : la page et ses fichiers restent disponibles hors ligne.
var CACHE='retour-v1',FILES=['retour.html','manifest.json','icon-192.png','icon-512.png','index.html','eleuthera.html','ciel.html','houlometre.html'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return Promise.all(FILES.map(function(f){return c.add(f).catch(function(){})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(function(r){var copy=r.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy)});return r}).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match('retour.html')})}))});
