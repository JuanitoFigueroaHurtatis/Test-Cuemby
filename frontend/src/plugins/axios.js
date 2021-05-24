import axios from 'axios'
import config from '../../config';

export default axios.create({
    baseURL: config.API_URL_ROOT,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Token": localStorage.getItem("token")
    }
});
