import actions from './actions.js';

export default {
    namespaced: true,
    state: {
        script: []
    },
    getters: {
        getScripts(state) {
            return state.script;
        }
    },
    mutations: {
        setScripts(state, script) {
            state.script = script;
        },
    },
    actions
}
