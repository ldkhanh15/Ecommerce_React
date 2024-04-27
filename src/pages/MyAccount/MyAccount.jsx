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
import { Helmet } from 'react-helmet';
import { logout } from '@/services/userService';
import { connect } from 'react-redux';
import { removeUser } from '@/redux/action';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const MyAccount = ({ removeUser }) => {
  useScrollToTop();
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const handleLogout = async () => {
    setLoading(true);
    let res = await logout();
    if (res.code) {
      removeUser();
      localStorage.removeItem('token');

      setTimeout(() => {
        setLoading(false);
        navigate('/')
      }, 1000)

    }

  }
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>My Account</title>
      </Helmet>
      <div className={cx('side-bar')}>
        {
          data.map((item, index) => (
            <div key={index} onClick={() => item.check ? handleLogout() : setPage(index)} className={page === index ? cx('item', 'active') : cx('item')}>
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
        {page === 0 && <Dashboard />}
        {page === 1 && <Orders />}
        {page === 2 && <TrackOrder />}
        {page === 3 && <Address />}
        {page === 4 && <AccountDetail />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
  removeUser
}
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)