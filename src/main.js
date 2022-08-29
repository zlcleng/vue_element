import { createApp } from 'vue'
import { createPinia } from 'pinia'
import installElementPlus from './plugins/element'

import App from './App.vue'
import router from './router'

import './styles/index.less'
import vTable from '@/components/Table/index.vue'

const app = createApp(App)

installElementPlus(app)
app.use(createPinia())
    .use(router)
    .use('v-table', vTable)
    .mount('#app')
