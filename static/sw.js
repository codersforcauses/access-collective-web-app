importScripts('/access-collective-web-app/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "access-collective-web-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/access-collective-web-app/_nuxt/app.28ef7be896030552ae87.js",
    "revision": "08e91e0cee8704b333ae67287233917a"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.2cd1a8d2d29c3e3dc5fa.js",
    "revision": "9685093734c45f3486e9007008986617"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.00bb257c19f5c29b7c84.js",
    "revision": "52209572fb2e2c479443693901b59c44"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.92ae317431f9d13f5df4.js",
    "revision": "aace3b2f4f73347cfd8cfb7e9d86539c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/contact.ffadfc597e04f85dbc25.js",
    "revision": "e2503f1d41523964fd87202f3955143c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/index.4b41c52719703d01a4b2.js",
    "revision": "4135964f52aea6517b060accf00f4f86"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/inspire.175b1266f149939e162b.js",
    "revision": "b1efd14dce2ab06143bd4d53bdc80fc1"
  },
  {
    "url": "/access-collective-web-app/_nuxt/vendor.7c74467f748fc6e4a213.js",
    "revision": "a64c35ac7844af09e35f6df72d3c8f89"
  }
])


workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/.*'), workboxSW.strategies.networkFirst({}), 'GET')

