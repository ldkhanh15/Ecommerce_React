import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { getBill } from '@/services/orderService'
import { Link } from 'react-router-dom'
import { deleteBill } from '@/services/billService'


const cx = classNames.bind(styles)
const Order = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      let res = await getBill();
      setData(res.data)
    }
    getData();
  }, [])
  let all = 0, completed = 0, cancelled = 0, wait = 0;
  if (data) {
    data.map(item => {
      all += item.totalPrice;
      completed += item.idStatus === '5' ? item.totalPrice : 0
      cancelled += item.idStatus === '6' ? item.totalPrice : 0
      wait += item.idStatus === '1' ? item.totalPrice : 0
    })
  }
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this order?')) {
      let res = await deleteBill(id);
      console.log(res);
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Orders</h1>
      <div className={cx('info')}>
        <div className={cx('item')}>
          <div className={cx('top')}>
            All Orders
          </div>
          <div className={cx('count')}>
            {all} $
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            Order Placed
          </div>
          <div className={cx('count')}>
            {wait} $
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            Completed Order
          </div>
          <div className={cx('count')}>
            {completed} $
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            Cancelled
          </div>
          <div className={cx('count')}>
            {cancelled} $
          </div>
        </div>
      </div>
      <div className={cx('list-order')}>
        <table>
          <thead>
            <tr>
              <td>
                STT
              </td>
              <td>
                ID
              </td>
              <td>
                Date
              </td>
              <td>
                Shop Name
              </td>
              <td>
                Total
              </td>
              <td>
                Status
              </td>
              <td>
                Details
              </td>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((item, index) => {
                let arr = item.createdAt.split(".");
                let time = arr[0].split("T");
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>#{item.id}</td>
                    <td>{time[0]}</td>
                    <td>{item.shop.name}</td>
                    <td>{item.totalPrice}$</td>
                    <td><span className={cx(['status', `status_${item.idStatus}`])}>{item.status.status}</span></td>
                    <td className={cx('view')}>
                      <Link className={cx(['btn', 'view'])} to={`/seller/orders/${item.id}`}>View</Link>
                      <div onClick={() => handleDelete(item.id)} className={cx(['btn', 'delete'])}>Delete</div>
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
          <li>51</li>
        </ul>
      </div>

    </div>
  )
}

export default Order