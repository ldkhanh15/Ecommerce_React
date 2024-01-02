import axios from '../lib/axios'

export const getUser = () => {
    return axios.get('/api/user');
}
export const createProduct = (data) => {
    return axios.post('/api/product', data);
}