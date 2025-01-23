import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/common.scss'
import 'uno.css'
import { setupStore } from './store'
import router from './router/index'
import { setupNaive } from '@/plugins';
import Vicons from './plugins/vicons'
import { setupNaiveDiscreteApi } from "./utils";
import 'virtual:svg-icons-register';
import SvgIcon from "@/components/svgIcon/index.vue";
async function setupApp() {
    const app = createApp(App)
    setupStore(app)

    setupNaiveDiscreteApi()

    setupNaive(app)
    
    app.use(Vicons)

    app.component('svg-icon',SvgIcon)

    app.use(router).mount('#app')
}
setupApp()

