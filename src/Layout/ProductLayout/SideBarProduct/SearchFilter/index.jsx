import React from 'react'
import ByCategory from './ByCategory'
import ByPaymentType from './ByPaymentType'
import ByPrice from './ByPrice'
import ByRating from './ByRating'
import ShipFrom from './ShipFrom'
import ShipOption from './ShipOption'

const SearchFilter = () => {
  return (
    <div>
        <ByCategory/>
        <ShipFrom/>
        <ShipOption/>
        <ByPrice/>
        <ByPaymentType/>
        <ByRating/>
    </div>
  )
}

export default SearchFilter