import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import ModalOrder from '@/components/ModalOrder/ModalOrder';
import { getBill } from '@/services/billService';
import moment from 'moment';
const cx = classNames.bind(styles);
const Orders = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([])
  const handleModal = (d) => {
    setItem(d)
    setOpen(true);
  }
  useEffect(() => {
    const getData = async () => {
      let res = await getBill();
      setData(res.data);
    }
    getData();
  }, [])
  console.log(data);
  return (
    <div className={cx('container')}>
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? data.map((item, index) => {
              const date = moment(item.createdAt).format('DD MMMM YYYY');
              return (
                <tr>
                  <th>{index + 1}</th>
                  <th>{date}</th>
                  <th>{item?.status?.status}</th>
                  <th>${item.totalPrice - item.discountPrice}</th>
                  <th onClick={() => handleModal(item)}><Link>View</Link></th>
                </tr>
              )
            }) : null
          }

        </tbody>
      </table>
      <div className={cx('footer')}>
        <p>
          Hoping you to have a good day!!!
        </p>
      </div>
      <ModalOrder open={open} setOpen={setOpen} data={item} />
    </div>
  )
}

export default Orders