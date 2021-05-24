import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import teamsModule from './modules/teams';
import usersModule from './modules/users';
import playersModule from './modules/players';
import scriptsModule from './modules/scripts';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        teams: teamsModule,
        users: usersModule,
        players: playersModule,
        scripts: scriptsModule
    },
    state: {
    },
    getters: {
    },
    actions: {
    },
});

export default store;
