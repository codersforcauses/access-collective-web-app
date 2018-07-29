importScripts('/access-collective-web-app/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "access-collective-web-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/access-collective-web-app/_nuxt/app.5794575dd2f7581c0ab5.js",
    "revision": "0a79d960bf59c4a6d4b874e772978059"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.00f7ea385f12f5c07add.js",
    "revision": "4cbe894857f44662345fe9f15eeef183"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.6787b8aafc5165164083.js",
    "revision": "ff8183d65fcbcd9002b8e634ebd8abac"
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

