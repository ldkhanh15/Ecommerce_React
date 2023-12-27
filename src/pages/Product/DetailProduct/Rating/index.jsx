import Navigation from '@/components/Navigation'
import React from 'react'
import Comment from './Comment'
import Total from './Total'

const ProductRating = () => {
  return (
    <div>
      <Total/>
      <Comment/>
      <Navigation/>
    </div>
  )
}

export default ProductRating