import axios from '../lib/axios'
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getBill = () => {
    return axios.get('/api/bill')
}