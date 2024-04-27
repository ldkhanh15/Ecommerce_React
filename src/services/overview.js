import axios from '../lib/axios'
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getOverview = () =>{
    return axios.get('/api/overview')
}