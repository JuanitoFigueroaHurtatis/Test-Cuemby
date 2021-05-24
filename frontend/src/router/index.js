import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * Components
 */
import Dashboard from '../views/Home/Dashboard.vue';
import Players from '../views/Player/Players.vue';
import Teams from '../views/Team/Teams.vue';

export const routes = [
  { 
    path: '/', 
    name: "dashboard", 
    component: Dashboard,
  },
  { 
    path: '/team', 
    name: "team", 
    component: Teams,
  },
  { 
    path: '/player', 
    name: "player", 
    component: Players,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router