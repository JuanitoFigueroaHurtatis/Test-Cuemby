import axios from '../../../plugins/axios.js';
import swal from '../../../components/AlertSweet.js';

export default {
    async index(context) {
        const res = await axios.get('/script/consume');
        if (res.data) {
            context.commit('setScripts', res.data.data);
        } else {
            swal.mixinMessage('error', 'Incorrect!');
        }
    },
}