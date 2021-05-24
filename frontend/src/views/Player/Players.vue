<template>
    <div>
        <section class="content-header bg-theme2">
            <h1>Players</h1>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                <li class="breadcrumb-item">Players</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title"></h3>
                            <form @submit.prevent="" class="form">
                                <div class="container-fluid"> 
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 justify-content-center">
                                            <div class="form-group">
                                                <label :for="player.search.label">{{ player.search.label +' '+ player.search.required}}</label>
                                                <input
                                                    type="text" class="form-control"
                                                    v-model="player.search.val"
                                                    v-validate="player.search.rules"
                                                    :placeholder="player.search.label"
                                                    :name="player.search.label"
                                                >
                                                <div class="form_error" v-if="errors.has(player.search.label)">
                                                    {{ errors.first(player.search.label) }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 justify-content-center">
                                            <div class="form-group">
                                                <label :for="player.page.label">{{ player.page.label +' '+ player.page.required}}</label>
                                                <input
                                                    type="text" class="form-control"
                                                    v-model="player.page.val"
                                                    v-validate="player.page.rules"
                                                    :placeholder="player.page.label"
                                                    :name="player.page.label"    
                                                >
                                                <div class="form_error" v-if="errors.has(player.page.label)">
                                                    {{ errors.first(player.page.label) }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 justify-content-center">
                                            <div class="form-group">
                                                <label :for="player.order.label">{{ player.order.label +' '+ player.order.required}}</label>
                                                <select
                                                    class="form-control"
                                                    :name="player.order.label"
                                                    v-model="player.order.val"
                                                    v-validate="player.order.rules"
                                                >
                                                    <option
                                                        :value="orders.code"
                                                        v-for="(orders, index) in order"
                                                        :key="index"
                                                    >{{ orders.name }}</option>
                                                </select>
                                                <div class="form_error" v-if="errors.has(player.order.label)">
                                                    {{ errors.first(player.order.label) }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2" style="margin-top:3%">
                                            <button type="submit" class="btn btn-theme2"  @click="index"><i class="fa fa-search"></i> Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="box-body">
                            <table id="tbl_teams" class="table table-bordered table-striped table-responsive" width="100%">
                                <thead class="bg-theme">
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th class="text-center">Photo</th>
                                        <th class="text-center">First Name</th>
                                        <th class="text-center">Last Name</th>
                                        <th class="text-center">Team</th>
                                        <th class="text-center">Nation</th>
                                        <th class="text-center">Position</th>
                                        <th class="text-center">Visulization</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(player, index) in players" :key="player._id">
                                    <tr>
                                        <td class="text-center">{{ index + 1 }}</td>
                                        <td class="text-center">
                                            <img src="@/assets/theme/images/default.png" class="user-image rounded-circle" alt="User Image" width="30px">
                                        </td>
                                        <td class="text-center">{{ player.firstName }}</td>
                                        <td class="text-center">{{ player.lastName }}</td>
                                        <td class="text-center">{{ player.team }}</td>
                                        <td class="text-center">{{ player.nation }}</td>
                                        <td class="text-center">{{ player.position }}</td>
                                        <td class="text-center">
                                            <a class="option-visulization" @click="visualizationPlayer(player)" data-toggle="tooltip" data-placement="top" title="Visualization Player"> <i class="fa fa-pencil-square-o" style="color: #54bdc1;"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <visualization-player></visualization-player>
    </div>
</template>
<script>
    import Player from '../../classes/Player.js';
    import VisualizationPlayer from './VisualizationPlayer.vue';
    import { Bus } from '../../main.js';

    export default {
        name: 'Players',
        data: () => ({
            players: [],
            order: [{code: 1, name: 'Ascending'}, {code: -1, name: 'Descending'}],
            player: new Player({})
        }),
        components: {
            VisualizationPlayer
        },
        methods: {
            visualizationPlayer(player){
                Bus.$emit('SHOW_VISUALIZATION_PLAYER', { data: player } );
            },
            async index(){
                await this.$store.dispatch('players/index', this.player);
                this.players = await this.$store.getters['players/getPlayers'];
            }
        },
    }
</script>