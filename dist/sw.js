importScripts('/access-collective-web-app/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.647690d57ef5373fb519.js",
    "revision": "5cfaa5c9412ea83538443cde4ff27cb0"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.29e1fe2c7e398bb038f7.js",
    "revision": "5a4433e19b8d456e64602af8d4b337f1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.7c2d1a1f0d6335e58b16.js",
    "revision": "cc4c111da5bfa3d40fadf76f16e8cb9e"
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





