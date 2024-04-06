import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getBanner = (data) => {
    return axios.get(`/api/banner?main=${data}`)
}
export const getAllBanner = () => {
    return axios.get(`/api/banner/all`)
}

export const updateBanner = (data) => {
    return axios.put(`/api/banner/update`,data)
}
export const deleteBanner = (id) => {
    return axios.delete(`/api/banner/delete?id=${id}`)
}
export const createBanner = (data) => {
    const formData = new FormData();
    for(const key in data){
        formData.append(key,data[key]);
    }
    return axios.post(`/api/banner/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const uploadImage = (data) => {
    const formData = new FormData();
    console.log(data);
    // Đưa dữ liệu vào formData
    for (const key in data) {
        formData.append(key, data[key]);
    }

    return axios.post(`/api/banner/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}