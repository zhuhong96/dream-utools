import { createRouter,  createMemoryHistory } from 'vue-router'
import basicRoutes from './basicRoutes'
import { useAppStore } from '@/store'

const router = createRouter({
    history: createMemoryHistory(),
    routes: basicRoutes
})

async function handleRouteNavigation(to, from, next) {
    window.$loading?.start();
    const appStore = useAppStore();
    next();
}

router.beforeEach(handleRouteNavigation);

router.afterEach(() => {
    window.$loading?.finish();
})

router.onError(() => {
    window.$loading?.error()
})

export default router