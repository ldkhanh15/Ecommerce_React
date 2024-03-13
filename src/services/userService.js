import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getCustomer = (id) => {
    return axios.get(`/api/user/customer`)
}
export const login = (data) => {
    return axios.post('/api/login', data, {
        withCredentials: true
    })
}
export const getUser = (id) => {
    return axios.get(`/api/user?id=${id}`);
}
export const updateUser = (data) => {
    return axios.put(`/api/user/update`,data);
}

export const getUserOfShop = (id) => {
    return axios.get(`/api/user?idShop=${id}`);
}
export const deleteUser = (id) => {
    return axios.delete(`/api/user/delete?id=${id}`);
}