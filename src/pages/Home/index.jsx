import React from 'react'
import FlashSale from './FlashSale'
import Category from './Category'
import SuggestProduct from '../Product/SuggestProduct'
import Introduce from './Introduce'
import DetailCate from './Category/DetailCate'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <FlashSale/>
      <SuggestProduct/>
      <Introduce/>
      <DetailCate/>
    </div>
  )
}

export default Home