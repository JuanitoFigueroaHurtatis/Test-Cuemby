import axios from '../../../plugins/axios.js';
import swal from '../../../components/AlertSweet.js';
import decode from 'jwt-decode';

export default {
    async login(context, user) {
        let token = localStorage.getItem("token");
        if(token) {
            context.commit("setToken", token);
            context.commit("setUsers", decode(token));
        }else{
            const res = await axios.post('/user/v1/login', {email: user.email.val, password: user.password.val});
            if (res.data) {
                context.commit("setToken", res.data.tokenReturn)
                context.commit("setUsers", res.data.user)
                localStorage.setItem("token", res.data.tokenReturn)
                console.log(res.data);
            } else {
                swal.mixinMessage('error', 'Incorrect!');
            }
        }  
            
    },
}