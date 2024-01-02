import React, { useEffect, useState } from 'react'
import ListProduct from '../components/ListProduct'
import { getVoucherProduct } from '@/services/voucherService'
const ProductVoucher = () => {
  const [data, setData] = useState([]);
  const getProduct = async () => {
    try { 
      const res = await getVoucherProduct();
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, [])



  console.log(data);
  return (
    <div>
      ProductVoucher
      <ListProduct />
    </div>
  )
}

export default ProductVoucher