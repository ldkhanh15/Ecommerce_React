import useScrollToTop from '@/hooks/useScrollToTop'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FaBookOpen, FaFacebook } from "react-icons/fa";
import { BsApple } from 'react-icons/bs'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import { register } from '@/services/userService'
import Loading from '@/components/Loading/Loading'

const cx = classNames.bind(styles)
const RegisterBuy = () => {
  useScrollToTop();
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleCreate = async () => {
    if (data.password !== data.confirm) {
      toast.error('Confirm Password incorrect')
      return;
    }
    if (!agree) {
      toast.error('Please agree with terms and conditions before continuing')
      return;
    }
    setLoading(true)
    let res = await register({
      email: data.email,
      password: data.password,
      username: data.username,
      role: 'R3'
    })
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    setLoading(false)
    navigate('/login')
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <Helmet>
            <title>Buyer Register</title>
          </Helmet>
          <div className={cx('left')}>
            <h3>Create an Account</h3>
            <p>Already have an account ? <Link to={'/login'}>Login instead!.</Link></p>
            <div className={cx('form')}>
              <input onChange={(e) => handleChange(e)} type="text" placeholder='Username *' name='username' />
              <input onChange={(e) => handleChange(e)} type="email" placeholder='Email *' name='email' />
              <input onChange={(e) => handleChange(e)} type="password" placeholder='Password *' name='password' />
              <input onChange={(e) => handleChange(e)} type="password" placeholder='Confirm Password *' name='confirm' />
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
                  <input type="checkbox" id='agree' />
                  <label onClick={() => setAgree(!agree)} className={agree ? cx('active') : ''} htmlFor="agree">I agree to terms & Policy</label>
                </div>
                <div className={cx('right-action')}>
                  <FaBookOpen className={cx('icon')} />
                  <span className={cx('text')}>Learn more</span>
                </div>
              </div>
              <div className={cx('btn')}>
                <button onClick={() => handleCreate()}>Submit & Register</button>
              </div>
              <div className={cx('note')}>
                <span> Note:</span> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy
              </div>
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('main')}>
              <div className={cx('item')}>
                <div className={cx('image')}>
                  <img src="/images/logo/logo-facebook.svg" alt="" />
                </div>
                <div className={cx('text')}>
                  Continue with Facebook
                </div>
              </div>
              <div className={cx('item')}>
                <div className={cx('image')}>
                  <img src="/images/logo/logo-google.svg" alt="" />
                </div>
                <div className={cx('text')}>
                  Continue with Google
                </div>
              </div>
              <div className={cx('item')}>
                <div className={cx('image')}>
                  <img src="/images/logo/logo-apple.svg" alt="" />
                </div>
                <div className={cx('text')}>
                  Continue with Apple
                </div>
              </div>
            </div>
          </div>
          <div className={cx('other')}>
            <div className={cx('main')}>
              <p className={cx('text')}>
                OR CONTINUE WITH
              </p>
              <div className={cx('image')}>
                <div className={cx('item')} title="Login with Facebook">
                  <FaFacebook className={cx('icon')} />
                </div>
                <div className={cx('item')} title="Login with Google">
                  <img src="/images/logo/logo-google.svg" alt="" />
                </div>
                <div className={cx('item')} title="Login with Apple">
                  <BsApple className={cx('icon')} />
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default RegisterBuy