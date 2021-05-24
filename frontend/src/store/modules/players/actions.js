import axios from '../../../plugins/axios.js';
import swal from '../../../components/AlertSweet.js';

export default {
    async index(context, player) {
        const res = await axios.get(`/player/v1/players?search=${player.search.val}&order=${player.order.val}&page=${player.page.val}`);
        if (res.data.Players) {
            context.commit('setPlayers', res.data.Players);
        } else {
            swal.mixinMessage('error', 'Incorrect!');
        }
    },
}