import useScrollToTop from '@/hooks/useScrollToTop'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { login } from '@/services/userService'
import { connect } from 'react-redux'
import { addUser } from '@/redux/action'

const cx = classNames.bind(styles)
const LoginBuy = ({ addUser,user }) => {
  const [member, setMember] = useState(false)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate=useNavigate();
  const handleLogin = async () => {
    const res = await login({ email, password: pass })
    localStorage.setItem('token',res.token)
    if(res.code){
      addUser({
        ...res.user,
      })
      navigate('/')
    }
  }
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Buyer Login</title>
      </Helmet>
      <div className={cx('left')}>
        <img src="/images/other/login-1.png" alt="" />
      </div>
      <div className={cx('right')}>
        <h3>Login</h3>
        <p>Don't have an account ? <Link to={'/buyer/register'}>Create here.</Link></p>
        <div className={cx('form')}>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Username or Email *' />
          <input onChange={(e) => setPass(e.target.value)} type="text" placeholder='Your Password *' />
          <div className={cx('secure')}>
            <input type="text" placeholder='Security Code' />
            <div className={cx('code')}>
              <span>8</span>
              <span>7</span>
              <span>6</span>
              <span>9</span>
            </div>
          </div>
          <div className={cx('action')}>
            <div className={cx('left-action')}>
              <input type="checkbox" id='remember' />
              <label onClick={() => setMember(!member)} className={member ? cx('active') : ''} htmlFor="remember">Remember me</label>
            </div>
            <div className={cx('right-action')}>
              Forgot Password ?
            </div>
          </div>
          <div className={cx('btn')}>
            <button type='submit' onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}



const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBuy);