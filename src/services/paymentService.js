import axios from '../lib/axios'
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getPayment = () => {
    return axios.get('/api/payment')
}
export const createPayment = (data) => {
    return axios.post(`/api/payment/create`, data)
}
export const deletePayment = (id) => {
    return axios.delete(`/api/payment/delete?id=${id}`,)
}

export const updatePayment = (data) => {
    return axios.put(`/api/payment/update`, data)
}