import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { getUser, updateUser } from '@/services/userService';
const cx = classNames.bind(styles);
const AccountDetail = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      let res = await getUser();
      let date = res.data.birthday;
      date = date.split('T');
      setData({
        avatar: res.data.avatar,
        birthday: date[0],
        email: res.data.email,
        gender: res.data.gender,
        phone: res.data.phone,
        name: res.data.name,
        username: res.data.username,
        id:res.data.id
      })
    }
    getData();
  }, [])
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleUpdate = async () => {
    let res = await updateUser({
      birthday: data.birthday,
      gender: data.gender,
      phone: data.phone,
      name: data.name,
      username: data.username,
      id: `${data.id}`
    })
    console.log(res);
  }
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <h3>My Profile</h3>
          <p>Manage and protect your account</p>
        </div>
        <div className={cx('info')}>
          <div className={cx('input')}>
            <label htmlFor="firstName">Name *</label>
            <input onChange={(e) => handleChange(e)} name='name' value={data.name} type="text" id='firstName' placeholder='Name' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="lastName">UserName *</label>
            <input onChange={(e) => handleChange(e)} name='username' value={data.username} type="text" id='lastName' placeholder='UserName' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="displayName">Email *</label>
            <input readOnly name='email' value={data.email} type="text" id='displayName' placeholder='Email' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="email">Birthday *</label>
            <input onChange={(e) => handleChange(e)} name='birthday' type="date" id='email' placeholder='Birthday' value={data.birthday} />
          </div>
          <div className={cx('input')}>
            <label htmlFor="phone">Phone Number *</label>
            <input onChange={(e) => handleChange(e)} name='phone' value={data.phone} type="text" id='phone' placeholder='Phone Number' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="gender">Gender *</label>
            <div className={cx('radio-input')} id='gender'>
              <div className={cx('item')}>
                <input defaultChecked={data.gender === "true" ? true : false} name='gender' type="radio" id='male' />
                <label onClick={() => setData({ ...data, gender: "true" })} className={data.gender === 'true' ? cx('active') : ''} htmlFor="male">Male *</label>
              </div>
              <div className={cx('item')}>
                <input defaultChecked={data.gender === "false" ? true : false} name='gender' type="radio" id='female' />
                <label onClick={() => setData({ ...data, gender: "false" })} className={data.gender === 'false' ? cx('active') : ''} htmlFor="female">Female *</label>
              </div>

            </div>
          </div>
          <div className={cx('btn')}>
            <button onClick={() => handleUpdate()}>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetail