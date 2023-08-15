import './assets/main.css'

import VTooltip from 'v-tooltip';
import ClientOnly from 'vue-client-only';
import VueClipboard from 'vue-clipboard2';
import VueCodemirror from 'vue-codemirror';
import VModal from 'vue-js-modal';
import Meta from 'vue-meta';
import NoSsr from 'vue-no-ssr';
import VueResize from 'vue-resize';
import 'vue-resize/dist/vue-resize.css';
import vSelect from 'vue-select';
import ShortKey from 'vue-shortkey';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// vue-server-renderer, no use found

app.use(VTooltip);
// app.use(VueClipboard);
app.use(VueCodemirror);
// app.use(VModal);
app.use(VueResize);
// app.use(Meta, {
//   keyName: 'head', attribute: 'data-n-head', ssrAttribute: 'data-n-head-ssr', tagIDKeyName: 'hid'
// });
app.use(ShortKey, { prevent: ['input', 'textarea', 'select'] });

app.component(ClientOnly.name, ClientOnly);
app.component('v-select', vSelect);
app.component(NoSsr.name, {
  ...NoSsr,
  render(h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true;

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'); // eslint-disable-line no-console
    }

    return NoSsr.render(h, ctx);
  }
});



app.mount('#app')
