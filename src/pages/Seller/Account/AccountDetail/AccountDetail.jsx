import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import Button from '@/components/Button'
import { getShop, updateShop } from '@/services/shopService'

const cx = classNames.bind(styles)
const AccountDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getShop(1);
      setData(res.data[0])
    }
    getData();
  }, [])
  const handleChange = (e, name) => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }
  const handleUpdate = async () => {
    let res = await updateShop({
      id: `${data.id}`,
      name: data.name,
      username: data.username,
      phone: data.phone,
      bank: data.bank,
      introduce: data.introduce,
      address: data.address,
    })
    console.log(res);
  }
  return (
    <div className={cx('container')}>
      {
        data && <>
          <h1>AccountDetail</h1>
          <div className={cx('main')}>
            <div className={cx('left')}>
              <div className={cx('avatar')}>
                <img src={data.avatar} alt="" />
              </div>
              <div className={cx('name')}>
                {data.name}
              </div>
            </div>
            <div className={cx('right')}>
              <input onChange={(e) => handleChange(e, 'name')} type="text" placeholder='Shop Name' value={data.name} />
              <input onChange={(e) => handleChange(e, 'username')} type="text" placeholder='Username' value={data.username} />
              <textarea onChange={(e) => handleChange(e, 'introduce')} type="text" rows={20} cols={10} placeholder='Description' value={data.introduce}></textarea>
              <input onChange={(e) => handleChange(e, 'address')} type="text" placeholder='Address' value={data.address} />
              <input onChange={(e) => handleChange(e, 'phone')} type="text" placeholder='Phone' value={data.phone} />
              <input onChange={(e) => handleChange(e, 'bank')} type="text" placeholder='Banking' value={data.bank} />
              <div className={cx('btn')}>
                <Button primary large onClick={() => handleUpdate()}>Update</Button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default AccountDetail