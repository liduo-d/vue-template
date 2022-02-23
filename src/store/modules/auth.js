export default {
    namespaced: true,
    state: {
        authList: ['*']
    },
    mutations: {
        updateAuthList(state, data) {
            state.authList = data;
        }
    },
    actions: {},
    modules: {}
}
