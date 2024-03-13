import axios from '../lib/axios'
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getDeliverShop = (id) => {
    return axios.get(`/api/vendor/deliver?id=${id}`);
}
export const getDeliver = () => {
    return axios.get(`/api/deliver`);
}
export const addDeliver = (data) => {
    return axios.post(`/api/vendor/add-deliver`, data);
}
export const deleteDeliver = (idDeliver, idShop) => {
    return axios.delete(`/api/vendor/delete-deliver?idShop=${idShop}&idDeliver=${idDeliver}`);
}