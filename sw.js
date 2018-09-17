importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.cce349942c455bcd67eb.js",
    "revision": "2948d2534951f03b4e2f5f5f676706c8"
  },
  {
    "url": "/_nuxt/layouts/default.62a8fc35d0d6c5c1f2e3.js",
    "revision": "b2bd052b75d0f3418930446ef91eb4ae"
  },
  {
    "url": "/_nuxt/manifest.59f7bf99362a958a5ffd.js",
    "revision": "4abc2fd29f78103cb8b40944b0e62863"
  },
  {
    "url": "/_nuxt/pages/about.4f63c4f48d4c28f51990.js",
    "revision": "d69e2e665eea9cacbc0f88090e56fbf0"
  },
  {
    "url": "/_nuxt/pages/contact.ffadfc597e04f85dbc25.js",
    "revision": "e2503f1d41523964fd87202f3955143c"
  },
  {
    "url": "/_nuxt/pages/index.0a637b07bc042d1b8fb3.js",
    "revision": "209cf72670a546c36eedf784d88e3cb5"
  },
  {
    "url": "/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/_nuxt/vendor.d534a236fd59e437279b.js",
    "revision": "a6c749bfd1ee3c60989ae5ebd0e3e222"
  }
], {
  "cacheId": "access-collective-web-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





