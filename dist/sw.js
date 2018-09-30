importScripts('/access-collective-web-app/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.ffb6c5b7949a3db1bfe5.js",
    "revision": "2fb281b47928b918c9316bd74c0d4613"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.29e1fe2c7e398bb038f7.js",
    "revision": "5a4433e19b8d456e64602af8d4b337f1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.5d616a59174040d79cb3.js",
    "revision": "89a8f71e5c596a4832afc78e334e0782"
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
    "url": "/access-collective-web-app/_nuxt/pages/index.174192c5a50fec8e9d24.js",
    "revision": "00133e0aae5e49cf1d38caf78b25675e"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.0f9203914c7117a94e72.js",
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





