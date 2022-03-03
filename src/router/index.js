import {createRouter, createWebHashHistory} from "vue-router";
import {routeList} from "./route";
import store from '@/store';
import {hasPermission} from "@/utils/permission";
import {WHITE_ROUTE_PATH} from '@/constants/permission';
import {parseRoute} from '@/utils/parse';

const router = createRouter({
    history: createWebHashHistory(),
    routes: parseRoute(routeList)
});

router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('d-username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (role && to.path === '/login') {
        next(from);
    } else if (!WHITE_ROUTE_PATH.includes(to.path) && !hasPermission(to.name, store.state.auth.authList)) {
        next('/403');
    } else {
        next();
    }
});

export default router;
