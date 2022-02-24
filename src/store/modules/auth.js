export default {
    namespaced: true,
    state: Object.assign({
        authList: ['*']
    }, JSON.parse(sessionStorage.getItem('storeAuth') || null)),
    mutations: {
        updateAuthList(state, data) {
            state.authList = data;
        }
    },
    actions: {},
    modules: {}
}
