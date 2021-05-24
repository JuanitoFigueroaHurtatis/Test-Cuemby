import axios from '../../../plugins/axios.js';
import swal from '../../../components/AlertSweet.js';

export default {
    async index(context, team) {
        const res = await axios.post('/player/v1/team', {team: team.team.val, page: team.page.val});
        if (res.data.Players) {
            //return res.data.Players;
            context.commit('setTeams', res.data.Players);
        } else {
            swal.mixinMessage('error', 'Incorrect!');
        }
    },
}