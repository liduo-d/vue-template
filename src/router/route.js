import Layout from '@/components/layout/index.vue'
import {h, resolveComponent} from 'vue'

export const route = [
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: 'System Home',
            icon: 'HomeFilled'
        },
        component: () => import ( /* webpackChunkName: "home" */ "@/views/home/index.vue")
    },
    {
        path: '/base',
        name: 'Base',
        redirect: '/base/baseTable',
        meta: {
            title: 'Base',
            icon: 'HelpFilled'
        },
        component: {
            render() {
                return h(resolveComponent('router-view'))
            },
        },
        children: [
            {
                path: '/baseTable',
                name: 'BaseTable',
                meta: {
                    title: 'Base Table',
                    icon: 'Files'
                },
                component: () => import ( /* webpackChunkName: "base" */ "@/views/base/baseTable/index.vue")
            },
            {
                path: '/baseForm',
                name: 'BaseForm',
                meta: {
                    title: 'Base Form',
                    icon: 'Document'
                },
                component: () => import ( /* webpackChunkName: "base" */ "@/views/base/baseForm/index.vue")
            },
            {
                path: '/baseChart',
                name: 'BaseChart',
                meta: {
                    title: 'Base Chart',
                    icon: 'PictureRounded'
                },
                component: () => import ( /* webpackChunkName: "base" */ "@/views/base/baseChart/index.vue")
            }
        ]
    },
    {
        path: '/tools',
        name: 'Tools',
        redirect: '/tools/markdown',
        meta: {
            title: 'Tools',
            icon: 'Setting'
        },
        component: {
            render() {
                return h(resolveComponent('router-view'))
            },
        },
        children: [
            {
                path: '/markdown',
                name: 'Markdown',
                meta: {
                    title: 'Markdown',
                    icon: 'Notebook'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/markdown/index.vue")
            },
            {
                path: '/richtext',
                name: 'Richtext',
                meta: {
                    title: 'Richtext',
                    icon: 'Ticket'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/richtext/index.vue")
            },
            {
                path: '/jsondiffpatch',
                name: 'Jsondiffpatch',
                meta: {
                    title: 'Jsondiffpatch',
                    icon: 'DArrowRight'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/jsondiffpatch/index.vue")
            },
            {
                path: '/line',
                name: 'Line',
                meta: {
                    title: 'Line',
                    icon: 'Minus'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/line/index.vue")
            },
            {
                path: '/drag',
                name: 'Drag',
                meta: {
                    title: 'Drag',
                    icon: 'Switch'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/drag/index.vue")
            },
            {
                path: '/cropper',
                name: 'Cropper',
                meta: {
                    title: 'Cropper',
                    icon: 'Rank'
                },
                component: () => import ( /* webpackChunkName: "tools" */ "@/views/tools/cropper/index.vue")
            }
        ]
    },
    {
        path: '/configuration',
        name: 'Configuration',
        redirect: '/configuration/auth',
        meta: {
            title: 'Configuration',
            icon: 'Operation'
        },
        component: {
            render() {
                return h(resolveComponent('router-view'))
            },
        },
        children: [
            {
                path: '/authConfig',
                name: 'AuthConfig',
                meta: {
                    title: 'Auth Config',
                    icon: 'FolderChecked'
                },
                component: () => import ( /* configuration: "configuration" */ "@/views/configuration/authConfig/index.vue")
            }
        ]
    },
];

export const routeList = [
    {
        path: '',
        redirect: '/home',
        component: Layout,
        children: route
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login',
            icon: ''
        },
        component: () => import ( /* webpackChunkName: "login" */ "@/views/login/index.vue")
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403',
            icon: ''
        },
        component: () => import ( /* webpackChunkName: "error" */ "@/components/errorPage/403.vue")
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import ( /* webpackChunkName: "error" */ "@/components/errorPage/404.vue")
    },
];
