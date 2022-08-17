import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import Vue3Lottie from 'vue3-lottie'
import { createPinia } from 'pinia'
import Vue3Transitions from 'vue3-transitions'
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(createPinia())
app.use(router);
app.use(store);
app.use(Vue3Transitions)
app.use(Vue3Lottie);

app.mount('#app');