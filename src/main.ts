import './assets/main.css'

import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')
