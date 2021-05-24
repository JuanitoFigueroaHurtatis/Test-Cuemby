import actions from './actions.js';

export default {
    namespaced: true,
    state: {
        team: []
    },
    getters: {
        getTeams(state) {
            return state.team;
        }
    },
    mutations: {
        setTeams(state, team) {
            state.team = team
        },
    },
    actions
}
