import React from 'react'
import { useParams } from 'react-router-dom';

const DetailPurchase = () => {
  const searchParams = useParams();
  console.log(searchParams);
  return (
    <div>DetailPurchase {searchParams.type}</div>
  )
}

export default DetailPurchase