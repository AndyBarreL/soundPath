import { createApp } from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue';
import './assets/styles/main.scss';

const app = createApp(App);

app.use(CoreuiVue);
app.mount('#app')
