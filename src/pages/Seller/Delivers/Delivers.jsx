import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { addDeliver, deleteDeliver, getDeliver, getDeliverShop } from '@/services/deliverService'
const cx = classNames.bind(styles)
const Delivers = () => {

  const [data, setData] = useState([])
  const [deliver, setDeliver] = useState([])
  const getData = async () => {
    let res = await getDeliverShop(1);
    setData(res.data)
    let resAll = await getDeliver();
    setDeliver(resAll.data)
    console.log(123);
  }
  useEffect(() => {
    getData();
  }, [])

  const handleAdd = async (item) => {
    let res = await addDeliver({
      idDeliver: `${item.id}`,
      idShop: '1'
    })
    setTimeout(async() => {
      getData();
    }, 500)
  }
  const handleDelete = async (item, id) => {
    let res = await deleteDeliver(item.id, id);
    setTimeout(async() => {
      getData();
    }, 500)
  }
  return (
    <div className={cx('container')}>

      <h1>Delivers</h1>
      <div className={cx('deliver')}>
        <h2>Selected delivers</h2>
        <div className={cx('list')}>
          {
            data && data.deliver && data.deliver.map((item, index) => (
              <div onClick={() => handleDelete(item, data.id)} key={index} className={cx(['item', 'selected'])}>
                {item.name}
              </div>
            ))
          }
        </div>
      </div>
      <div className={cx('deliver')}>
        <h2>All delivers</h2>
        <div className={cx('list')}>
          {
            deliver && deliver.map((item, index) => (
              <div onClick={() => handleAdd(item)} key={index} className={cx('item')}>
                {item.name}
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Delivers