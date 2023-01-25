import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const head = createHead()

createApp(App)
  .use(router)
  .use(head)
  .mount('#app')
