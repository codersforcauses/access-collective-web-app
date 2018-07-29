<template>
  <v-app :dark="isDarkMode">
    <nav-draw></nav-draw>
    <tool-bar></tool-bar>
    <v-content>
      <v-container fluid="true" style="padding: 0;">
        <alert></alert>        
        <nuxt />
      </v-container>
    </v-content>
    <footer></footer>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import NavDraw from '@/components/NavDraw'
import Footer from '@/components/Footer'
import Alert from '@/components/Alert'

export default {
  components: {
    ToolBar,
    NavDraw,
    Footer,
    Alert
  },
  created () {
    if (this.isIE()) this.$store.commit('showAlert', {type: 'error', message: 'Sorry IE browser is not supported please use a more recent browser: Chrome, Firefox, Edge, Safari'})

    this.addDriftMessaging()
  },
  data() {
    return {
      isDarkMode: true
    }
  },
  methods: {
    isIE: function () {
      let ua = window.navigator.userAgent;
      let msie = ua.indexOf("MSIE ");
      return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    },

    addDriftMessaging () {
      !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('2s4ixvidxsi3');
    }
  }
}

</script>

<style>

</style>
