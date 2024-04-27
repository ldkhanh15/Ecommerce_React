import axios from '../lib/axios'
axios.defaults.withCredentials = true
axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
export const getProduct = (page) => {
    return axios.get(`/api/product?page=${page}`)
}
export const getProductDetail = (id) => {
    return axios.get(`/api/product?id=${id}`)
}
export const getProductShop = (id) => {
    return axios.get(`/api/product/shop?id=${id}`)
}
export const getProductComment = (id) => {
    return axios.get(`/api/product/comment?id=${id}`)
}

export const deleteProduct = (id) => {
    return axios.delete(`/api/product/delete?id=${id}`)
}
export const createProduct = (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (key !== 'images' && key !== 'combo' && key !== 'color' && key !== 'size') {
            formData.append(key, data[key]);
        }
    }
    data?.images?.forEach((imageFile) => {
        formData.append('images', imageFile);
    });
    data?.combo?.forEach((comboItem) => {
        formData.append('combo', comboItem);
    })
    data?.color?.forEach((colorItem) => {
        formData.append('color', colorItem);
    })
    data?.size?.forEach((sizeItem) => {
        formData.append('size', sizeItem);
    })

    return axios.post(`/api/product/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const updateProduct = (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (key !== 'images' && key !== 'combo' && key !== 'color' && key !== 'size') {
            formData.append(key, data[key]);
        }
    }
    data?.images?.forEach((imageFile) => {
        formData.append('images', imageFile);
    });
    data?.combo?.forEach((comboItem) => {
        formData.append('combo', comboItem);
    })
    data?.color?.forEach((colorItem) => {
        formData.append('color', colorItem);
    })
    data?.size?.forEach((sizeItem) => {
        formData.append('size', sizeItem);
    })

    return axios.put(`/api/product/update`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}


//SIZE
export const getSize = () => {
    return axios.get('/api/size')
}
export const createSize = (data) => {
    return axios.post(`/api/size/create`, data)
}
export const deleteSize = (id) => {
    return axios.delete(`/api/size/delete?id=${id}`,)
}

export const updateSize = (data) => {
    return axios.put(`/api/size/update`, data)
}
export const searchSize = (query) => {
    return axios.get(`/api/size/search?q=${query}`)
}

export const postComment = (data) => {
    return axios.post('/api/product/create-comment', data)
}
export const searchProduct = (query) => {
    return axios.get(`/api/product/search?q=${query}`)
}