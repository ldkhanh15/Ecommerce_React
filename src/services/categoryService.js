import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const getCate = (data) => {
    return axios.get(`/api/category?featured=${data}`);
}