import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { useEffect } from 'react'
import { deleteUser, getCustomer } from '@/services/userService'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Customer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getCustomer();
      setData(res.data);
    }
    getData()
  }, [])
  console.log(data);
  const handleDelete = async(id) => {
    if(confirm('Are you sure you want to delete this customer?')){
      let res = await deleteUser(id);
      console.log(res);
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Customers</h1>
      <div className={cx('customer')}>
        <div className={cx('header')}>
          <input type="text" placeholder='Search a customer' />
          <CiSearch className={cx('icon')} />
        </div>
        <div className={cx('list')}>
          <table>
            <thead>
              <tr>
                <td>
                  STT
                </td>
                <td>
                  Name
                </td>
                <td>
                  Email
                </td>
                <td>
                  Phone
                </td>
                <td>
                  Number of purchases
                </td>
                <td>
                  Number of successful orders
                </td>
                <td>
                  Total purchase order
                </td>
                <td>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.bill[0].totalOrders}</td>
                    <td>{item.bill[0].successfulOrders}</td>
                    <td>{item.bill[0].totalPrice}$</td>
                    <td className={cx('action')}>
                      <Link to={`/seller/customers/${item.id}`} className={cx(['btn', 'view'])}>
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

export default Customer