import useScrollToTop from '@/hooks/useScrollToTop'
import React from 'react'
import { Helmet } from 'react-helmet'

const OrderTracking = () => {
  useScrollToTop()
  return (
    <div>
      <Helmet>
        <title>Order Tracking</title>
      </Helmet>
    </div>
  )
}

export default OrderTracking