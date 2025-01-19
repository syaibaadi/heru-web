import { createApp } from 'vue';  // Menggunakan `createApp` dari Vue 3
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Membuat instance Vue 3 dan menghubungkan router
createApp(App)
  .use(router) // Menambahkan Vue Router
  .mount('#app');
