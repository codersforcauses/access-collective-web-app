importScripts('/access-collective-web-app/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "access-collective-web-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/access-collective-web-app/_nuxt/app.55ad2e8d44b64556691b.js",
    "revision": "596fc3822b529b11d76d6e8044ffc689"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.2cd1a8d2d29c3e3dc5fa.js",
    "revision": "9685093734c45f3486e9007008986617"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.213bae3a80a5640d8852.js",
    "revision": "99afc1b8317b96da76a3cf50a72eb315"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.92ae317431f9d13f5df4.js",
    "revision": "aace3b2f4f73347cfd8cfb7e9d86539c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/contact.0ce6670da6aa573b169a.js",
    "revision": "3d36c2e2173131dfefbfd21ba905ecfc"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.4cd52cf752b0dda2eee0.js",
    "revision": "abd0487bb755dcc5dee2cc0389ba205a"
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

