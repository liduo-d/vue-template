export const parseStyle = cssText => {
    if (!cssText) {
        return ['', ''];
    }
    return cssText.split(': ');
};

const addCustomName = (route, parentCustomName) => {
    if (route.meta) {
        route.meta.customName = parentCustomName ? `${parentCustomName},${route.name}` : route.name;
    }
    return route;
};

export const parseRoute = (route, parentCustomName) => {
    const routeList = [];
    route.forEach(r => {
        if ((!r.path || r.path === '/') && r.children?.length) {
            r.children = parseRoute(r.children, r.meta?.customName || r.name);
            routeList.push(r);
        } else if (r.path && r.path !== '/' && r.children?.length) {
            routeList.push(...parseRoute(r.children, r.meta?.customName || r.name));
        } else {
            routeList.push(addCustomName(r, parentCustomName));
        }
    });
    return routeList;
};
