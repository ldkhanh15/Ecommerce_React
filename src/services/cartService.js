import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const addCart = (data) => {
    return axios.post('/api/cart/add', data)
}

export const getCart = (id) => {
    return axios.get(`/api/cart?id=${id}`)
}
export const updateCart = (data) => {
    return axios.put('/api/cart/update', data)
}
export const deleteCart = (id, idProduct) => {
    return axios.delete(`/api/cart/delete?id=${id}&idProduct=${idProduct}`,)
}
export const deleteCartAll = (id) => {
    return axios.delete(`/api/cart/delete-all?id=${id}`,)
}