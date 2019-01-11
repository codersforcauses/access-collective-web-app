importScripts('/access-collective-web-app/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.eac6dff3f9c7a106994e.js",
    "revision": "0eb3157b62a0dff5acc1ed050af703f6"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.01bfd53feb5c5db0f6f4.js",
    "revision": "5bb08936febb9e8e22d5ea0cb0095a25"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.9827727414b887935655.js",
    "revision": "8c8805387fa96f32899497cc79a17e87"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.ff7dd1c10e9f9fc063a1.js",
    "revision": "556c9ac0d69da875e72c871c6da0345f"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.7140e0ad53b72411173a.js",
    "revision": "74bfc277a3519d9c1ae559f7c03962bc"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.894f2b457d41a6d39e6a.js",
    "revision": "d938a57e1b56437eaab0f7224ab3af8e"
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





