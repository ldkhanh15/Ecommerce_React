import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { deleteShop, getShop } from '@/services/shopService'

const cx = classNames.bind(styles)
const Vendor = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await getShop();
    setData(res.data);
  }
  useEffect(() => {
  
    getData();
  }, [])
  const handleDelete = async (id) => {
    let res = await deleteShop(id);
    getData();
  }
  return (
    <div className={cx('container')}>
      <h1>Vendors</h1>
      <div className={cx('vendor')}>
        <div className={cx('header')}>
          <input type="text" placeholder='Search a vendor' />
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
                  Phone
                </td>
                <td>
                  Address
                </td>
                <td>
                  Number of purchases
                </td>
                <td>
                  Total order
                </td>
                <td>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((item, index) => {
                  let revenue = item.bill.reduce((acc, item) => {
                    return acc + item.totalPrice;
                  }, 0)

                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.bill.length}</td>
                      <td>{revenue}</td>
                      <td className={cx('action')}>
                        <Link to={`/seller/account/${item.id}`} className={cx(['btn', 'view'])}>
                          View
                        </Link>
                        <button onClick={() => handleDelete(item.id)} className={cx(['btn', 'del'])}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  )

                })
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
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vendor