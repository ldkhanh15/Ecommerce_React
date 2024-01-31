import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import ModalOrder from '@/components/ModalOrder/ModalOrder';

const cx = classNames.bind(styles);
const Orders = () => {
  const [open, setOpen] = useState(false);
  const [data, setData]=useState('');
  const handleModal = (d) => {
    setData(d)
    setOpen(true);
  }
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
          <tr>
            <th>#1</th>
            <th>January 23, 2024</th>
            <th>Processing</th>
            <th>$ 125 for 2 item</th>
            <th onClick={()=>handleModal('item 1')}><Link>View</Link></th>
          </tr>
          <tr>
            <th>#1</th>
            <th>January 23, 2024</th>
            <th>Processing</th>
            <th>$ 125 for 2 item</th>
            <th onClick={()=>handleModal('item 2')}><Link>View</Link></th>
          </tr>
          <tr>
            <th>#1</th>
            <th>January 23, 2024</th>
            <th>Processing</th>
            <th>$ 125 for 2 item</th>
            <th onClick={()=>handleModal('item 3')}><Link>View</Link></th>
          </tr>
          <tr>
            <th>#1</th>
            <th>January 23, 2024</th>
            <th>Processing</th>
            <th>$ 125 for 2 item</th>
            <th onClick={()=>handleModal('item 4')}><Link>View</Link></th>
          </tr>
        </tbody>
      </table>
      <div className={cx('footer')}>
        <p>
          Hoping you to have a good day!!!
        </p>
      </div>
      <ModalOrder open={open} setOpen={setOpen} data={data} />
    </div>
  )
}

export default Orders