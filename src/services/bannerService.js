import axios from '../lib/axios'
axios.defaults.withCredentials = true

export const getBanner = (data) => {
    return axios.get(`/api/banner?main=${data}`)
}