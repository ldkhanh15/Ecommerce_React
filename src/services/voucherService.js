import axios from '../lib/axios'

export const getVoucherProduct = () => {
    return axios.get('/api/voucher')
}