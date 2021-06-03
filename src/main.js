import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// MDB VUE UI from https://mdbootstrap.com/
import * as mdb from 'mdb-ui-kit';

createApp(App).use(router).mount('#app');
