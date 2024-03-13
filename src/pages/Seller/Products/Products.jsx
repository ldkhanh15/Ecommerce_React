import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import { CiSearch } from 'react-icons/ci'
import { getProduct } from '@/services/shopService'
import { deleteProduct } from '@/services/productService'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getProduct(1);
      setData(res.data)
    }
    getData();
  }, [])
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      let res = await deleteProduct(id);
      console.log(res);
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Products</h1>
      <div className={cx('product')}>
        <div className={cx('header')}>
          <div className={cx('left')}>
            <input type="text" placeholder='Search a product' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('right')}>
            <Button primary large>Add new product</Button>
          </div>
        </div>
        <div className={cx('list')}>
          {
            data && <table>
              <thead>
                <tr>
                  <td>
                    STT
                  </td>
                  <td>
                    ID
                  </td>
                  <td>
                    Name
                  </td>
                  <td>
                    Price
                  </td>
                  <td>
                    Sold
                  </td>
                  <td>
                    Stock
                  </td>
                  <td>
                    Shop
                  </td>
                  <td>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>#{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price} $</td>
                      <td>{item.sold}</td>
                      <td>{item.detailProduct.quantity}</td>
                      <td>{item.shop.name}</td>
                      <td className={cx('action')}>
                        <Link to={`/seller/products/${item.id}`} className={cx(['btn', 'view'])}>
                          View
                        </Link>
                        <button onClick={() => handleDelete(item.id)} className={cx(['btn', 'del'])}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }


              </tbody>
            </table>
          }
        </div>
        <div className={cx('navigation')}>
          <ul>
            <li className={cx('active')}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>51</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products