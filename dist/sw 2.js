importScripts('/access-collective-web-app/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "access-collective-web-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/access-collective-web-app/_nuxt/app.f45d7986d9276a1064ea.js",
    "revision": "e8542cb4a664213100492ba471d537ff"
  },
  {
    "url": "/access-collective-web-app/_nuxt/layouts/default.2cd1a8d2d29c3e3dc5fa.js",
    "revision": "9685093734c45f3486e9007008986617"
  },
  {
    "url": "/access-collective-web-app/_nuxt/manifest.269b3d3e2e861abbca77.js",
    "revision": "cb85870a1227693de6d147eb21e8cc3c"
  },
  {
    "url": "/access-collective-web-app/_nuxt/pages/about.c0c50bff693b20b3cfe1.js",
    "revision": "4888d91e15daf1d79d83c518041cf72b"
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
    "url": "/access-collective-web-app/_nuxt/vendor.7c74467f748fc6e4a213.js",
    "revision": "a64c35ac7844af09e35f6df72d3c8f89"
  }
])


workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/access-collective-web-app/.*'), workboxSW.strategies.networkFirst({}), 'GET')

