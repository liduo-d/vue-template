import {createRouter, createWebHashHistory} from "vue-router";
import {routeList as routes} from "./route";

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('d-username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (role && to.path === '/login') {
        next(from);
    } else {
        // TODO auth control
        next();
    }
});

export default router;
