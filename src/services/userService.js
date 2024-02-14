import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const login = (data) => {
    return axios.post('http://localhost:8080/api/login', data, {
        withCredentials: true
    })
}
export const getUser = () => {
    return axios.get('/api/user');
}
export const createProduct = (data) => {
    return axios.post('/api/product', data);
}