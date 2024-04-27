import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getVoucherProduct = () => {
    return axios.get('/api/voucher')
}
export const getVoucherOfShop = (page) => {
    return axios.get(`/api/voucher/get-voucher-shop?page=${page}`)
}
export const getVoucherOfShopOnly=(id)=>{
    return axios.get(`/api/voucher/get-voucher-shop?id=${id}`)
}
export const getVoucherDetails = (id) => {
    return axios.get(`/api/voucher?id=${id}`)
}
export const deleteVoucher = (id) => {
    return axios.get(`/api/voucher/delete?id=${id}`)
}
export const updateVoucher = (data) => {
    return axios.put(`/api/voucher/update`, data)
}
export const createVoucher = (data) => {
    return axios.post(`/api/voucher/create`, data)
}
export const getVoucherOfAll =()=>{
    return axios.get(`/api/voucher/all`)
}
export const searchVoucher=(query)=>{
    return axios.get(`/api/voucher/search?q=${query}`)
}