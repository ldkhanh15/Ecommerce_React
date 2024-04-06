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
    if (id) {
        return axios.get(`/api/user?id=${id}`);
    }
    return axios.get(`/api/user`);
}
export const updateUser = (data) => {
    return axios.put(`/api/user/update`, data);
}

export const getUserOfShop = (id) => {
    return axios.get(`/api/user?idShop=${id}`);
}
export const deleteUser = (id) => {
    return axios.delete(`/api/user/delete?id=${id}`);
}
export const getAddress = () => {
    return axios.get(`/api/user/address`);
}
export const createAddress = (data) => {
    return axios.post('/api/user/address/create', data);
}
export const deleteAddress = (id, idUser) => {
    return axios.delete(`/api/user/address/delete?id=${id}&idUser=${idUser}`);
}