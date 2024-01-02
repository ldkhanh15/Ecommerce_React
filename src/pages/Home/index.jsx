import React, { useEffect, useState } from 'react'
import FlashSale from './FlashSale'
import Category from './Category'
import SuggestProduct from '../Product/SuggestProduct'
import Introduce from './Introduce'
import DetailCate from './Category/DetailCate'
import Banner from './Banner'
import { getUser } from '@/services/userService'

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getUser();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);
  return (
    <div>
      <button onClick={getData}>Click me</button>
      <Banner />
      <Category />
      <FlashSale />
      <SuggestProduct />
      <Introduce />
      <DetailCate />
    </div>
  )
}

export default Home