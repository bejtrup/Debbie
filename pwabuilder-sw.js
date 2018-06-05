//This is the service worker with the Cache-first network
var Version = 1;

var CACHE = 'DEBBIE-precache';
var precacheFiles = [
      "index.html",
      "./",
      "css/common.min.css",
      "css/HVD_Poster_Clean.ttf",
      "css/protrait.min.css",
      "css/landscape.min.css",
      "img/MobilePay_Logo.png",
      "img/burger.png",
      "img/can_bottom.png",
      "img/can_top.png",
      "img/can.png",
      "img/on_can_back.png",
      "img/on_can_front.png",
      "img/Pate.png",
      "img/pee_wipe.png",
      "img/poo_wipe.png",
      "img/rune_close.png",
      "img/rune_list.png",
      "img/rune_menu.png",
      "img/wine.png",
      "img/wipe_ass.png",
      "js/Bands.js",
      "js/Program.js",
      "js/ratebands.js",
      "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
    ];
//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});

//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[PWA Builder] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  console.log('[PWA Builder] The service worker is serving the asset: '+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  return fetch(request).then(function(response){ return response});
}
