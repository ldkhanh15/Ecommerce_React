import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }

export const getAllBlog = () => {
    return axios.get('/api/blog')
}
export const getDetailBlog = (id) => {
    return axios.get(`/api/blog/detail?id=${id}`)
}
export const createBlog = (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (key !== 'tag') {
            formData.append(key, data[key]);
        }
    }
    data.tag?.map((item) => {
        formData.append('tag', item.name);
    })
    return axios.post(`/api/blog/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const deleteBlog = (id) => {
    return axios.delete(`/api/blog/delete?id=${id}`)
}
export const updateBlog = (data) => {
    return axios.put(`/api/blog/update`, data)
}