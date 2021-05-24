import actions from './actions.js';

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },
    getters: {
        getUsers(state) {
            return state.user;
        }
    },
    mutations: {
        setToken(state,token){
            state.token = token;
        },
        setUsers(state, user) {
            state.user = user
        },
    },
    actions
}