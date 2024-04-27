import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getDetailBill = (id) => {
    return axios.get(`/api/bill/detail?id=${id}`)
}
export const getProductCommentOfBill = (id) => {
    return axios.get(`/api/bill/product-comment?id=${id}`)
}
export const deleteBill = (id) => {
    return axios.delete(`/api/bill/delete?id=${id}`)
}
export const updateStatusBill = (data) => {
    return axios.put(`/api/bill/update-status`, data)
}
export const updateBill = (data) => {
    return axios.put(`/api/bill/update`, data)
}

export const getStatus = () => {
    return axios.get(`/api/bill/status`)
}
export const getBill = () => {
    return axios.get(`/api/bill`)
}
export const getBillSeller = (page) => {
    return axios.get(`/api/bill/seller?page=${page} `)
}
export const createBill = (data) => {
    return axios.post('/api/bill/create', data)
}
export const searchBill=(query)=>{
    return axios.get(`/api/bill/search?q=${query}`)
}