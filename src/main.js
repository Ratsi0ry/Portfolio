import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Components from './Components/Components.vue'

const app = createApp(App)

const routes = [
    {path:'/', component:Components}
]

const router  = createRouter({
    history:createWebHistory(),
    routes
})


app.use(router)
app.mount('#app')
