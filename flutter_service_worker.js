'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"manifest.json": "d97ef31ddea38088ba51914dcf90a102",
"main.dart.js": "99f4a675ae14fc7a2b01daee3c38e0d7",
"index.html": "806e5e4b925f3847e72584ecfb40c323",
"/": "806e5e4b925f3847e72584ecfb40c323",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "76bf9f6bfa2ada513b939b82f34a47c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/aliou.png": "5e512c116ae6feaf4b06b5f5c1fda424",
"assets/assets/images/javaa.png": "c53162d2770d046c57f66e060440a02d",
"assets/assets/images/dart.png": "d01ff86bf66d8eb56972646646c964d8",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/javascript.png": "1a756eb6ca471177cdbd231745af5885",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/orange.png": "faa3d8a475e81ec23e83dcb40c5f38ca",
"assets/assets/images/backend.png": "0ebc182c1d9edd588d260e8a19d50f42",
"assets/assets/images/talend.png": "92ec5447fba07bb6902f4af2699bcbed",
"assets/assets/images/csshtml.png": "8c7b3503a47f109fa9907f12e6f3aed6",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/powerbi.png": "041c02d2dd14eecee5a078977fcf5993",
"assets/assets/images/sql.png": "fd600848f0774ea75d7c8a9370cb77ba",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/html.png": "d909e2bb0c03387bd5bdbf0f0a3c2861",
"assets/assets/images/jee.png": "7b7d8dae25b16a99b18fa5a34cffbaf6",
"assets/assets/images/css.png": "efee652a34f601fdf44e84e8de59a4b3",
"assets/assets/images/logo.png": "05ab5b21abe7ea7c179f19afa77ed0ca",
"assets/NOTICES": "bbbe51305b93be31a5a6ccac73e44d9f",
"icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
