import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

import { setupComponents } from './config/setup-components';

const app = createApp(App);

setupComponents(app);

app.use(router).use(vuetify).mount('#app');

// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .mount('#app')
