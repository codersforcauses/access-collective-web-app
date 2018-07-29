importScripts('/access-collective-web-app/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "access-collective-web-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/access-collective-web-app/_nuxt/app.4286f8825322aec8c39b.js",
    "revision": "91bb783f5b429607d197f8b5f9fe8ba7"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.3ff7a8979a080298b694.js",
    "revision": "4372e713ed9f4ebd5b08d95e0106bfbd"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.38b33251e8b32ab8b6c7.js",
    "revision": "f471dff538caeaef6c4e72810236bbde"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.6d35bfbe477bea4f5d04.js",
    "revision": "950e1a37dfb9ee51104da837851d2fa9"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/contact.0ce6670da6aa573b169a.js",
    "revision": "3d36c2e2173131dfefbfd21ba905ecfc"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.f9c8a6da34d985f662e6.js",
    "revision": "25e10a0223c93039feec2dbf98ba177d"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.80bdca91eb007fe85211.js",
    "revision": "3e5c866cd5f9e7d40a6a987cc39ab704"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.7c74467f748fc6e4a213.js",
    "revision": "a64c35ac7844af09e35f6df72d3c8f89"
  }
])


workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/.*'), workboxSW.strategies.networkFirst({}), 'GET')

