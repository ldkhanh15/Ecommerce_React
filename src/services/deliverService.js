import axios from '../lib/axios'
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }


export const getDeliver = () => {
    return axios.get(`/api/deliver`);
}
export const createDeliver = (data) => {
    return axios.post(`/api/deliver/create`, data);
}
export const deleteDeliver = (id) => {
    return axios.delete(`/api/deliver/delete?id=${id}`);
}
export const updateDeliver = (data) => {
    return axios.put(`/api/deliver/update`, data);
}


export const getDeliverShop = (id) => {
    return axios.get(`/api/vendor/deliver?id=${id}`);
}
export const addDeliver = (data) => {
    return axios.post(`/api/vendor/add-deliver`, data);
}
export const deleteDeliverShop = (idDeliver, idShop) => {
    return axios.delete(`/api/vendor/delete-deliver?idShop=${idShop}&idDeliver=${idDeliver}`);
}
