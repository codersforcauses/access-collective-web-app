importScripts('/access-collective-web-app/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/access-collective-web-app/_nuxt/app.647690d57ef5373fb519.js",
    "revision": "5cfaa5c9412ea83538443cde4ff27cb0"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.7be84c7116c86511cc98.js",
    "revision": "e6e7441509bc8461f998f8465dbecba2"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.e8c3b4acae1a9fdf892e.js",
    "revision": "5f5fa93c7b8ecdd422fa19cd83f7b30c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.5f2164607dafad69c79c.js",
    "revision": "09e0529c075349eedded42633fb1e39e"
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





