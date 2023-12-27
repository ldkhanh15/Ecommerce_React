
import React from 'react'
import { useParams } from 'react-router-dom'
import BigNav from './BigNav'
import DetailFlashSale from './DetailFlashSale'
import SmallNav from './SmallNav'

const FlashSale = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <BigNav/>
      <SmallNav/>

      <DetailFlashSale/>
    </div>
  )
}

export default FlashSale