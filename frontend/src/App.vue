<template>
    <div id="app">
        <the-header :name="nameHeader"></the-header>
        <the-sidebar :name="nameHeader">
            <router-view>        
            </router-view>
        </the-sidebar>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheHeader from '../src/components/layout/TheHeader.vue';
import TheSidebar from '../src/components/layout/TheSidebar.vue';
import TheFooter from '../src/components/layout/TheFooter.vue';
import User from './classes/User.js';
export default {
    data: () => ({
        user: new User({}),
        nameHeader: "",
    }),
    components: {
        TheHeader,
        TheSidebar,
        TheFooter
    },
    methods: {
        async login(){
            this.user.email.val = 'juanjosefigueroahurtatis@gmail.com';
            this.user.password.val = 'secret';
            await this.$store.dispatch('users/login', this.user);
            this.nameHeader = await this.$store.getters['users/getUsers'].name;
        }
    },
    created(){
        this.login();
    }
}
</script>

