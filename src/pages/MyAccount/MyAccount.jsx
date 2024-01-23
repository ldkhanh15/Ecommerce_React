import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import useScrollToTop from '@/hooks/useScrollToTop';
import data from './data'
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import TrackOrder from './components/TrackOrder/TrackOrder';
import Address from './components/Address/Address';
import AccountDetail from './components/AccountDetail/AccountDetail';
const cx = classNames.bind(styles);
const MyAccount = () => {
  useScrollToTop();
  const [page, setPage] = useState(3);
  return (
    <div className={cx('container')}>
      <div className={cx('side-bar')}>
        {
          data.map((item, index) => (
            <div key={index} onClick={()=>setPage(index)} className={page === index ? cx('item', 'active') : cx('item')}>
              <div className={cx('icon')}>
                {item.icon}
              </div>
              <div className={cx('text')}>
                {item.title}
              </div>
            </div>
          ))
        }
      </div>
      <div className={cx('main')}>
        {page===0 && <Dashboard/>}
        {page===1 && <Orders/>}
        {page===2 && <TrackOrder/>}
        {page===3 && <Address/>}
        {page===4 && <AccountDetail/>}
      </div>
    </div>
  )
}

export default MyAccount