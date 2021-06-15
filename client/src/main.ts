import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

import { setupComponents } from './config/setup-components';

setupComponents(App);

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
