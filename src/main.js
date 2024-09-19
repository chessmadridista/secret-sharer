import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})

axios.defaults.baseURL = 'http://127.0.0.1:5000'

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
