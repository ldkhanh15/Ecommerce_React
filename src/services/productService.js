import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const getProduct = () => {
    return axios.get('/api/product')
}   
export const getProductDetail = (id) => {
    return axios.get(`/api/product?id=${id}`)
}   