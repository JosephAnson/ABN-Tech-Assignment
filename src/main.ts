import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import routes from "~pages"

import "@unocss/reset/tailwind.css"
import "uno.css"
import "./styles/main.scss"
import "swiper/css/bundle"

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const head = createHead()

createApp(App).use(router).use(head).mount("#app")
