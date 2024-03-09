import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getShop = (id) => {
    return axios.get(`/api/vendor?id=${id}`)
}

export const updateShop = (data) => {
    const formData = new FormData();

    // Đưa dữ liệu vào formData
    for (const key in data) {
        formData.append(key, data[key]);
    }

    // Gửi yêu cầu PUT với FormData
    return axios.put(`/api/vendor/update`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}