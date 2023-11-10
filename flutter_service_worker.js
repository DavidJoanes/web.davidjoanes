'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd7da3960b61a9748bfb12faaedc0169",
"assets/AssetManifest.json": "c38714c7798ea84c3f0c52e277874ec2",
"assets/assets/cv/KemdirimDavid.pdf": "e7cb97879b2af82db765d405b73d7ae7",
"assets/assets/icons/acecore_logo_1.jpg": "c8b72e6354e76fefcb15d6f6f52e1811",
"assets/assets/icons/acecore_logo_2.jpg": "078985760881c26dc1c12652920fe697",
"assets/assets/icons/aws.png": "b48cddea811c1b925c99c0b7107db990",
"assets/assets/icons/cite_logo.png": "586f54133d2b8ae71d0a0fb326e29e7d",
"assets/assets/icons/cloudinary.png": "60fc2b1f2fea4afefa26d73aab6f4c10",
"assets/assets/icons/cyclic.png": "34253c3f27576d36acce0010db118d1f",
"assets/assets/icons/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/icons/django.png": "27935b84d12947fc00e162304924b87f",
"assets/assets/icons/double_right_black.png": "d68bebf4c0197edad6e132d5e0c4135c",
"assets/assets/icons/double_right_white.png": "00c7fb682eff1e5625663eb464cbde24",
"assets/assets/icons/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/icons/flask.png": "4552499691d708daced6f216af46c162",
"assets/assets/icons/git.png": "221762f09039ad5be0491c21775709f9",
"assets/assets/icons/github.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/icons/home_design.png": "44da1906c9c1d836c76b626ed8ba5bcb",
"assets/assets/icons/huawei_logo.jpg": "92f3d3ca6f1ed6a5885ca52f93ee32d6",
"assets/assets/icons/javascript.png": "319356ec500fa715973405e17c47d19f",
"assets/assets/icons/logo.png": "d2df481e7883000a8bc96152e7855dfc",
"assets/assets/icons/mail.png": "db3921367084308347fcbd09111c7ef3",
"assets/assets/icons/netlify.png": "a2147829cad76b2932066d58592c0625",
"assets/assets/icons/nodejs.png": "70637588b45634cebb451b2efb778d73",
"assets/assets/icons/python.png": "2aae2ae0b55ad76dafe20d06bc788e90",
"assets/assets/icons/railway.png": "b3de74255833ad6688e68ea4841ce5b8",
"assets/assets/icons/right-black.png": "fab7ca218bc082ddb8bf1072bda8977f",
"assets/assets/icons/right-white.png": "588c9a56933bfa441ad24c016fa4d631",
"assets/assets/icons/user_black.png": "69bb0ec11e240e166a968e0635462a2c",
"assets/assets/icons/user_white.png": "ca42ca2fe6f80a6a7b30344c86b547b0",
"assets/assets/images/award.jpg": "37996ef1f4951fd686f27eb16bb0da4d",
"assets/assets/images/background.jpg": "2781fa2781d77eb112429128fed6e443",
"assets/assets/images/certificates/ai.png": "e931f74e3ba09362d000b31f71d10e7b",
"assets/assets/images/certificates/bigdata.png": "7082229b85b1ebb3956d1df85760e7e0",
"assets/assets/images/certificates/datacom.png": "67f3c3330d77cfa8f54d43f423d71c63",
"assets/assets/images/certificates/storage.png": "93eaccb26c7d2f4010b6d726b3b1cbb2",
"assets/assets/images/me_3.jpg": "b6ee3c433aa37d52f25753a55596cea2",
"assets/assets/images/me_4.jpg": "4cc105f9d2e238c8e8acda5aa13992f2",
"assets/assets/images/me_5.jpg": "deba5869a6fb2f7a3c633be23d78a104",
"assets/assets/images/projects/bbj/1.jpg": "ce226b11b3f602a3f41ecf6f7a9e74cf",
"assets/assets/images/projects/bbj/2.jpg": "109127da310ca68dc190fb49f46e53fb",
"assets/assets/images/projects/bbj/3.jpg": "028f7a789224d78ab86a050cfdb254b3",
"assets/assets/images/projects/bbj/4.jpg": "b80f72d0aa331011f5f7e58d891cd792",
"assets/assets/images/projects/bbj/5.jpg": "c8ae8ff1a76e6ec458ff16faca9408dd",
"assets/assets/images/projects/bbj/6.jpg": "380105106127a18caf6fcaf3c52b908e",
"assets/assets/images/projects/jogenicsHMS/1.png": "e658ab889f34a7f3ea4c702eb15f5a6f",
"assets/assets/images/projects/jogenicsHMS/2.png": "d38c1d42af0c88f363151464f039504b",
"assets/assets/images/projects/jogenicsHMS/3.png": "e90c4de531ddb7ba90d0b4235eca6224",
"assets/assets/images/projects/jogenicsHMS/4.png": "3fb3ea62161167789a380d1ba8716d16",
"assets/assets/images/projects/jogenicsHMS/5.png": "79e42b8de1466c66ad5f3b2f24b25b21",
"assets/assets/images/projects/jogenicsHMS/6.png": "1585d52793f7b69ba2f7bdc4e92e7046",
"assets/assets/images/projects/peculyn/1.png": "9a11c304999a8b00954cb667c16a29c0",
"assets/assets/images/projects/peculyn/2.png": "c352209b8a8fff837cf8663ed96440b6",
"assets/assets/images/projects/peculyn/3.png": "83133566b43c0b942dc89b64f6bbf6eb",
"assets/assets/images/projects/peculyn/4.png": "e53080ed35163e1610cdf18c871e2cf1",
"assets/assets/images/projects/peculyn/5.png": "c826b4642c8e470f4520f8aa39839912",
"assets/assets/images/projects/powercore/1.png": "7790834eb32d1fbbeefbd2d76603318a",
"assets/assets/images/projects/powercore/2.png": "ce449fa89c2cb4f144b2d14f37f8dd97",
"assets/assets/images/projects/powercore/3.png": "b8e9b8167f55c7673c5cb33578fe8acd",
"assets/assets/images/projects/sar/1.png": "99aa27f51047c589f08597d89850b443",
"assets/assets/images/projects/sar/2.png": "2dca16435418326cfbd671d85fb4ccbf",
"assets/assets/images/projects/sar/3.png": "ba8ebb7262f39bfbda9e8bfa735cdf5d",
"assets/assets/images/projects/sar/4.png": "38b72e971d32356362a4639aaffbbc57",
"assets/assets/images/projects/sar/5.png": "845fbff54d94a2aa12629752a333bc4e",
"assets/assets/images/projects/sirenjournals/1.png": "11df47d2b2f81274fca79350a7e64c2c",
"assets/assets/images/projects/sirenjournals/2.png": "96f7eb402faec7c64b4eba35c13e148f",
"assets/assets/images/projects/sirenjournals/3.png": "b05352828a9dbf602aa013dd6d4e20d4",
"assets/assets/images/projects/sirenjournals/4.png": "54f42411786f1b12326e292fc672c421",
"assets/FontManifest.json": "58410749bacb2e28e1bc1d2b18181f04",
"assets/fonts/MaterialIcons-Regular.otf": "a115d063335b463948079f9a07ce270b",
"assets/NOTICES": "010e8a123aa7bbd66deb10e727c4c17d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_devicon/fonts/FlutterDEVICON.ttf": "20e50df99a2adaab0678501ffb5c81cd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "3957641ef2344393a2d488896f99bc3f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"icons/Icon-maskable-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-maskable-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"index.html": "f5268dfa07188e2d1e4b24ec4df230ee",
"/": "f5268dfa07188e2d1e4b24ec4df230ee",
"main.dart.js": "6d29e0f520d3cac49ca1c8e6657bd57e",
"manifest.json": "fab3ac118c61686161d7f6187f8eac84",
"version.json": "dd1fa1864a66da335eb5b58af0061f9a",
"_redirects": "ef952d360ec42c652095dfeb72a350a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
