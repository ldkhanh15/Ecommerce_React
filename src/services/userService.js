import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const login = (data) => {
    return axios.post('/api/login', data, {
        withCredentials: true
    })
}
export const getUser = () => {
    return axios.get('/api/user');
}
export const getUserOfShop = (id) => {
    return axios.get(`/api/user?idShop=${id}`);
}