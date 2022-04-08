'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf1ab4bd139f8cb034a37bae5c825d63",
".git/logs/refs/heads/main": "1cc68f800fbf53d5d8f825d8e4ed4f67",
".git/logs/refs/remotes/origin/main": "ffe55c5dd0946ecd1557a25b16c49d21",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/index": "7f8875f441d1f59a4b6310738dfc5cc4",
".git/config": "a4d5f95e7f796764839cb34e08fb7e5b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "15ba65bce2058e7dd05d51eadf2c106e",
".git/refs/remotes/origin/main": "15ba65bce2058e7dd05d51eadf2c106e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "c6566f64461986ffe46c913e76644b70",
".git/objects/90/c6b23cc8bcb519af38d3c9fe6987b069d5456c": "80a66dbd54eb5f228d3e55e839c9bc0f",
".git/objects/76/4708fa15f88eaf1f8c31c3fcd06666fedb5688": "5dbadb4b290eacb457dc1dcf48b0a004",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/f5/240b817ddec0094940fac8dc782704e12349a5": "e68eeb6b3908c194b3e1c61b9d0e89be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/42/c662bc443fe1d5367049c854abbce991cb84da": "31971b967105af912cafccfa4f82fabb",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/fb/5fa3ad773d2ed4d7f0ef4c473efb55830deb13": "12f86ff0286c1a9116791b7b4f7643fc",
".git/objects/72/a1c55601d0408ae3d15f18a97bb2290d4fa117": "151ebd9553eb4d7429028c3a7958dd43",
".git/objects/6b/1d68995cc2f8241ea08495190af10b27448ed9": "742f4523339c074f8984079e4ab31f11",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/4e/85aca1710f5b8b5c4a644e2b26f686274a59be": "e863424a0ae662a136b03edccae59952",
".git/objects/81/797bf541c6af5100027bfbf5c109cb2a15da34": "a3e61ae1ba2a8c55f5f48eda572cb7fd",
".git/objects/5c/30ba55973955bb7624c94a9f1e483a4d7a5275": "ee43ea35b39ce5c44ae834ac5c4cce95",
".git/objects/b1/f46313024f9c3318911444016d37d02eb9f3b9": "a46b9b5e04d5ffd032d08a9b2062e6cc",
".git/objects/f3/bee6fd6fe186d80af3369a9c9e7ddc02901223": "7a9ab80fd88ca707579990d5a5a3267e",
".git/objects/f4/a0e6c029730463072d85356eda4ad69563f955": "4f2330a6018f0d1b7ca1592aa7e2a5eb",
".git/objects/f0/464f2059e4b6ea9f09481536c1b891f167b4bd": "98b40c08f1c5417c4a6c8b3c37b30aeb",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/85/dfbac186904998c9121efe141972f7cc7e9ae5": "4e3808cbc86073f5522f75e5407dca0e",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/0f/86ec995f3cfa2fb6a80c93684417f67db63139": "c47de21ea984f74cc3c0c286468b0850",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/24/4acd18776b25bb1032461cdaf2c2aa431a4054": "091777e612d4fd41881ea1b2821f46f2",
".git/objects/c1/b6a434c7afb7948e7d7fff805704bc15db6c38": "23647f780914160887442125c9aebec2",
".git/objects/db/b44844de1f0c554cded0ce131cf96a6cd3f8e4": "ffb2a155720f574d28053e8a583b4faa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/cd/6d5dd49d7332a893dfd180a6c871c863a3a7fc": "18095cecb7d26143532bb73cb61779e1",
".git/objects/e4/df985ef1356fe4016cd874ec94d5c253d3924b": "31ea13a9010bc5586e554a4b0a6d6354",
".git/objects/cf/03c0c7984e9d9fa4e872f93684235e14c6b6e6": "16835e7df77ee76e3c7fc0db6e40d964",
".git/objects/bb/faf9685a24cbb2438e13020a1c73c0bd46ba1a": "13ae6530f43ecb24d06c6503ea39e2d4",
".git/objects/4d/dead36e808d089f59dac82614aa2500ae5f410": "61c6323a117143d3dfbecbcca0e1eb2e",
".git/objects/8d/3be331d36b62399b660fb157cf5c05c91f027d": "7f2ccd75d72411796c033a5d08feb67a",
".git/objects/12/f97d6705bf5d619debeba1ecfd8f4a770ad4b1": "448da0f406444c677c9f452ec46cb2e2",
".git/objects/a5/83cb942e1b5ab7c52ba780914bfc1a405e77af": "0b29c6ffb6ab54646f4a44b67cc1c1c9",
".git/objects/3d/ce4f0e569fb43ff1c831dd1cdfa5926bc597fb": "db5e33a4e300ffa3f956f6a37d1ee39b",
".git/objects/56/664347ce81d6ef46452d85fdfe6c08a6a82715": "e94d2602e69766aa7fd06246cea663ed",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/86/252a48426583a8b840145f5ebfe79db3396488": "efd1fd9a9c97fb0b81304d65d6d9e677",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a2/137604e26239534a586ec5748e070b65d65d65": "aee97af16f92dccb5b83c245e4f131f0",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/d9/c5733007e0fbb41d65f3be5e6bef7f54cbe0db": "64bb8463ebbad33e9451d3330a811445",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/0a/a4242969184f5a43972c5bed2f4012a0bc7ae8": "d45273f68ad22581ce6762d25002e6a6",
".git/objects/c4/e1f6704b1e982d393593780740f8b257366f93": "1a3b54cc7170effbb7cf78b1b1b18b92",
".git/objects/41/947be9dca73a04ec2bed31665d6e9493343ac4": "9bcde354b220b2afba6ed8e4b394d1ed",
".git/objects/6e/daf99bf86241ce19fe498af538f946f68a08e8": "e8aa10b539f05f705b64cbee6a3ea774",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/d3/aee347f4f68d853fd42565ff7915aba4bbcf27": "eadd6876697fbfca7766a7e114edb7a7",
".git/objects/9c/e2ca1fd68f288d7be428f7b2e798ba32508691": "e896e0e597d0a6e2bd30ef7386d925f3",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/c9/7eec8a9300e973d08086fe2e80846019e192f6": "de2bb186783a8e5f7d1c931ef1f4bc40",
"manifest.json": "846f95787ffa97710c92daf923b11c41",
"main.dart.js": "bfa8928a0ac77afecefcb5a1e4f99464",
"index.html": "9a93136a72123e4c68f51140bdc6e5b0",
"/": "9a93136a72123e4c68f51140bdc6e5b0",
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
"README.md": "e763eef9eb59a86b6d19a86296eddffb",
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
