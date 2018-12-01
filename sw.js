importScripts('/access-collective-web-app/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.8e512cbf3234531562f7.js",
    "revision": "c90fadd64dcb1136e3846027ef9bb34e"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.8199406b36c69eb25714.js",
    "revision": "e9f27b2046259db5da0cc8e08ad0a2da"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.57bf9f2123cd73a443e5.js",
    "revision": "4b726ffb7c74bdd16e020a41dd280ade"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.ad5444389e6feed01acd.js",
    "revision": "ae4f0e4f14a041d4ccc586445a2a0a72"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/contact.ffadfc597e04f85dbc25.js",
    "revision": "e2503f1d41523964fd87202f3955143c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.5ed60ac083fe1605cf26.js",
    "revision": "c246c27d9cdf41186543f25cee9c1965"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.fbf3d5e1f84ac53e5fee.js",
    "revision": "07faa83324d86631e000309b2a5a8f0f"
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





