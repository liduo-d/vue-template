import {MAX_CACHE_TAG} from '@/constants/common';
import router from '@/router';

export default {
    namespaced: true,
    state: Object.assign({
        collapse: false,
        displayTagview: true,
        displayBreadcrumb: true,
        tagsList: [{name: 'Home', path: '/home', unCloseable: true}],
        themes: {}
    }, JSON.parse(sessionStorage.getItem('storeApp') || null)),
    mutations: {
        setTagsItem(state, data) {
            if (data.path === '/home') return;
            state.tagsList.splice(state.tagsList.findIndex(cacheTag => cacheTag.path === data.path) >>> 0, 1);
            if (state.tagsList.length === MAX_CACHE_TAG) {
                state.tagsList.splice(1, 1);
            }
            state.tagsList.push(data);
        },

        removeTagsItem(state, data) {
            if (data.path === '/home') return;
            const idx = state.tagsList.findIndex(cacheTag => cacheTag.path === data.path) >>> 0;
            if (router.currentRoute.value.fullPath === data.path)
                router.push(state.tagsList[idx - 1].path);
            state.tagsList.splice(idx, 1);
        },

        handleCollapse(state, data) {
            state.collapse = data;
        },

        handleTagview(state, data) {
            state.displayTagview = data;
        },

        handleBreadcrumb(state, data) {
            state.displayBreadcrumb = data;
        }
    },
    actions: {},
    modules: {}
}
