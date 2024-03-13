import axios from '../lib/axios'

export const getVoucherProduct = () => {
    return axios.get('/api/voucher')
}
export const getVoucherOfShop = (id) => {
    if (id) {
        return axios.get(`/api/voucher/get-voucher-shop?id=${id}`)
    }
    return axios.get('/api/voucher/get-voucher-shop')
}
export const getVoucherDetails = (id) => {
    return axios.get(`/api/voucher?id=${id}`)
}
export const deleteVoucher = (id) => {
    return axios.get(`/api/voucher/delete?id=${id}`)
}