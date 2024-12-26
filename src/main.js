import './css/style.sass'
import './css/fontawesome/css/all.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/icons/Icon.vue'

const app = createApp(App)

app.use(router)
app.component('SvgIcon', Icon)

app.mount('#app')
