// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import FontAwesomeIcon from './plugins/fontawesome';
import './css/index.css';


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
