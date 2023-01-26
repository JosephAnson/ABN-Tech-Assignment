import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import App from "./App.vue"
import generatedRoutes from "~pages"

import "@unocss/reset/tailwind.css"
import "uno.css"
import "./styles/main.scss"
import "swiper/css/bundle"

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()

createApp(App).use(router).use(head).mount("#app")
