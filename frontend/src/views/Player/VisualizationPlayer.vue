<template>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" role="dialog" id="visualization-player-modal" aria-hidden="true" style="display: none;" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-theme2">
                    <h4 class="modal-title" id="myLargeModalLabel">Visualization Player</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="" class="form">
                        <div class="row justify-content-center">
                            <img src="@/assets/theme/images/default.png" class="user-image rounded-circle" alt="User Image">
                        </div>
                        <div class="row" style="margin-top:4%">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label for="Last Name">First Name</label>
                                    <input
                                        type="text" class="form-control"
                                        v-model="player.firstName" disabled>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label for="Last Name">Last Name</label>
                                    <input
                                        type="text" class="form-control"
                                        v-model="player.lastName" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="Last Name">Nation</label>
                                    <input
                                        type="text" class="form-control"
                                        v-model="player.nation" disabled>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="Last Name">Team</label>
                                    <input
                                        type="text" class="form-control"
                                        v-model="player.team" disabled>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label for="Last Name">Position</label>
                                    <input
                                        type="text" class="form-control"
                                        v-model="player.position" disabled>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-12 modal-footer">
                    <div class="pull-right">
                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Bus } from '../../main.js';
    export default {
        data: () => ({
            player: {}
        }),
        methods: {
            show(action) {
                $('#visualization-player-modal').modal(action);
            },
        },
        created() {
            Bus.$on('SHOW_VISUALIZATION_PLAYER', (payload) => {
                this.show('show');
                this.player = payload.data;
            });
        },
    }
</script>