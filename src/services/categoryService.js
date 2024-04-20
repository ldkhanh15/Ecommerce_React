import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getCate = (data) => {
    return axios.get(`/api/category?featured=${data}`);
}
export const getAllCate = (page) => {
    return axios.get(`/api/category/all?page=${page}`);
}

export const updateCate = (data) => {
    return axios.put(`/api/category/update`,data)
}
export const deleteCate = (id) => {
    return axios.delete(`/api/category/delete?id=${id}`)
}
export const createCate = (data) => {
    const formData = new FormData();
    for(const key in data){
        formData.append(key,data[key]);
    }
    return axios.post(`/api/category/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const uploadImage = (data) => {
    const formData = new FormData();
    // Đưa dữ liệu vào formData
    for (const key in data) {
        formData.append(key, data[key]);
    }

    return axios.post(`/api/category/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}