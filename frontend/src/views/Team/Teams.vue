<template>
    <div>
        <section class="content-header bg-theme2">
            <h1>Teams</h1>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                <li class="breadcrumb-item">Teams</li>
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
                                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 justify-content-center">
                                            <div class="form-group">
                                                <label :for="team.team.label">{{ team.team.label +' '+ team.team.required}}</label>
                                                <input
                                                    type="text" class="form-control"
                                                    v-model="team.team.val"
                                                    v-validate="team.team.rules"
                                                    :placeholder="team.team.label"
                                                    :name="team.team.label"
                                                >
                                                <div class="form_error" v-if="errors.has(team.team.label)">
                                                    {{ errors.first(team.team.label) }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 justify-content-center">
                                            <div class="form-group">
                                                <label :for="team.page.label">{{ team.page.label +' '+ team.page.required}}</label>
                                                <input
                                                    type="text" class="form-control"
                                                    v-model="team.page.val"
                                                    v-validate="team.page.rules"
                                                    :placeholder="team.page.label"
                                                    :name="team.page.label"    
                                                >
                                                <div class="form_error" v-if="errors.has(team.page.label)">
                                                    {{ errors.first(team.page.label) }}
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
                                    </tr>
                                </thead>
                                <tbody v-for="(team, index) in teams" :key="team._id">
                                    <tr>
                                        <td class="text-center">{{ index + 1 }}</td>
                                        <td class="text-center">
                                            <img src="@/assets/theme/images/default.png" class="user-image rounded-circle" alt="User Image" width="30px">
                                        </td>
                                        <td class="text-center">{{ team.firstName }}</td>
                                        <td class="text-center">{{ team.lastName }}</td>
                                        <td class="text-center">{{ team.team }}</td>
                                        <td class="text-center">{{ team.nation }}</td>
                                        <td class="text-center">{{ team.position }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Team from '../../classes/Team.js';

export default {
    name: 'Teams',
    data: () => ({
        teams: [],
        team: new Team({})
    }),
    methods: {
        async index(){
            await this.$store.dispatch('teams/index', this.team);
            this.teams = await this.$store.getters['teams/getTeams'];
        }
    },
}
</script>