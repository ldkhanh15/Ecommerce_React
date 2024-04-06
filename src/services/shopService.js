import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getShopDetail = (id) => {
    return axios.get(`/api/vendor?id=${id}`)
}
export const getShop = () => {
    return axios.get(`/api/vendor`)
}
export const getAllShopDetail = (id) => {
    return axios.get(`/api/vendor/all?id=${id}`)
}
export const getAllShop = () => {
    return axios.get(`/api/vendor/all`)
}
export const deleteShop = (id) => {
    return axios.delete(`/api/vendor/delete?id=${id}`)
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

export const updateAvatarShop = (data) => {
    const formData = new FormData();

    // Đưa dữ liệu vào formData
    for (const key in data) {
        formData.append(key, data[key]);
    }

    // Gửi yêu cầu PUT với FormData
    return axios.put(`/api/vendor/update-avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const getProduct = (id) => {
    if (id) {
        return axios.get(`/api/product/get-product-shop?id=${id}`);
    }
    return axios.get(`/api/product/get-product-shop`);
}