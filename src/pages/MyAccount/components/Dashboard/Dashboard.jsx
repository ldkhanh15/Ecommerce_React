import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { connect } from 'react-redux'

const cx = classNames.bind(styles)
const Dashboard = ({ user }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        Hello {user?.name} !
      </div>
      <div className={cx('footer')}>
        <p>
          From your account dashboard. you can easily check & view your recent orders,
          manage your <strong>shipping and billing addresses</strong> and <strong>edit your password and account details</strong>.
        </p>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);