import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from "@arco-design/web-vue";
import '@arco-themes/vue-chengsezhuti/css/arco.css';
import router from "@/routes/routes";

createApp(App)
    .use(ArcoVue)
    .use(router)
    .mount('#app')
