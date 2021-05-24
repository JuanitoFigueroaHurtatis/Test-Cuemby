import actions from './actions.js';

export default {
    namespaced: true,
    state: {
        player: []
    },
    getters: {
        getPlayers(state) {
            return state.player;
        }
    },
    mutations: {
        setPlayers(state, player) {
            state.player = player
        },
    },
    actions
}
