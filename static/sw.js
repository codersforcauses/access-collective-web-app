importScripts('/access-collective-web-app/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.647690d57ef5373fb519.js",
    "revision": "5cfaa5c9412ea83538443cde4ff27cb0"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.62a8fc35d0d6c5c1f2e3.js",
    "revision": "b2bd052b75d0f3418930446ef91eb4ae"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.ea37a34e866d9f2dfcea.js",
    "revision": "2fde58e9d05e4e9e590f6260dc51b5ec"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.4f63c4f48d4c28f51990.js",
    "revision": "d69e2e665eea9cacbc0f88090e56fbf0"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/contact.ffadfc597e04f85dbc25.js",
    "revision": "e2503f1d41523964fd87202f3955143c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.0a637b07bc042d1b8fb3.js",
    "revision": "209cf72670a546c36eedf784d88e3cb5"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.d534a236fd59e437279b.js",
    "revision": "a6c749bfd1ee3c60989ae5ebd0e3e222"
  }
], {
  "cacheId": "access-collective-web-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/access-collective-web-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/access-collective-web-app/.*'), workbox.strategies.networkFirst({}), 'GET')





