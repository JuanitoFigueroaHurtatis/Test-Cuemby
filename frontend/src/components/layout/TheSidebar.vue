<template>
    <div>
        <aside class="main-sidebar">
            <section class="sidebar">
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="user-profile treeview">
                        <a href="#">

                            <img src="@/assets/theme/images/default.png" alt="user">
                            <span>{{ name }}</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="#">Profile </a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </li>
                    <li class="nav-devider"></li>
                    <li class="header nav-small-cap">Menu</li>
                    <li>
                        <router-link :to="{name: 'dashboard'}">
                            <i class="fa fa-dashboard"></i><span>Dashboard</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'team'}">
                            <i class="fa fa-trophy"></i><span>Teams</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'player'}">
                            <i class="fa fa-group"></i><span>Players</span>
                        </router-link>
                    </li>
                </ul>
            </section>
        </aside>
        <div class="content-wrapper">
           <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheSidebar",
        props: ['name'],
        data: () => ({
            script: "",
        }),
        methods: {
            async index(){
                await this.$store.dispatch('scripts/index');
                this.script = await this.$store.getters['scripts/getScripts'];
            }
        },
        created(){
            this.index();
        }
    }
</script>

<style scoped>

</style>
