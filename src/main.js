/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue'
import pinia from '@/store'

import App from './App.vue'
import router from '@/router'

import { loadFonts } from "@/plugins/webfontloader";
import vuetify from '@/plugins/vuetify';

const app = createApp(App)

loadFonts()

app.use(vuetify)
  .use(pinia)
  .use(router)

app.mount('#app')
