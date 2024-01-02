import { createProduct } from '@/services/userService'
import React from 'react'
import ListProduct from './components/ListProduct'

const Product = () => {
  const handleCreate = async () => {

    const data = {
      name: 'iphone16',
      price: '25000000',
      mainImage: 'ảnh main',
      idShop: 2,
      idBrand: 1,
      idCate: 1,
      description: 'hàng chất lượng  100%',
      from: 'China',
      comment: 'đẹp nha mấy ní',
      image: ['ảnh 1', 'ảnh 2', 'ảnh 3']
    }
    const res = await createProduct(data)
    console.log(res);

  }
  return (
    <div>
      <button onClick={handleCreate}>Product</button>
      <ListProduct />
    </div>
  )
}

export default Product