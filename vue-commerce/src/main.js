import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import BadgeDirective from 'primevue/badgedirective';

const pinia = createPinia();
const app = createApp(App);

app.directive('badge', BadgeDirective);
app.use(pinia);
app.use(PrimeVue);
app.mount('#app');