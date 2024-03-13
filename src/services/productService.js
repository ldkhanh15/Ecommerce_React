import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const getProduct = () => {
    return axios.get('/api/product')
}
export const getProductDetail = (id) => {
    return axios.get(`/api/product?id=${id}`)
}
export const getProductShop = (id) => {
    return axios.get(`/api/product/shop?id=${id}`)
}
export const getProductComment = (id) => {
    return axios.get(`/api/product/comment?id=${id}`)
}
export const getSize = () => {
    return axios.get('/api/size')
}
export const deleteProduct = (id) => {
    return axios.delete(`/api/product/delete?id=${id}`)
}