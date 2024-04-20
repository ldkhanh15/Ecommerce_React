import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { toast } from 'react-toastify'
import { addDeliver, deleteDeliverShop, getDeliver, getDeliverShop } from '@/services/deliverService'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
const cx = classNames.bind(styles)
const DeliverShop = ({ user }) => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [deliver, setDeliver] = useState([])
  const getData = async () => {
    let res = await getDeliverShop(id);
    setData(res.data)
    let resAll = await getDeliver();
    setDeliver(resAll.data)
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(data);
  console.log(deliver);
  const handleAdd = async (item) => {
    let res = await addDeliver({
      idDeliver: `${item.id}`,
      idShop: `${id}`
    })
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    setTimeout(() => {
      getData();
    }, 200)
  }
  const handleDelete = async (item) => {
    let res = await deleteDeliverShop(item.id, id);
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    setTimeout(() => {
      getData();
    }, 200)
  }
  return (
    <div className={cx('container')}>

      <h1>Delivers</h1>
      <div className={cx('deliver')}>
        <h2>Selected delivers</h2>
        <div className={cx('list')}>
          {
            data && data.deliver && data.deliver.map((item, index) => (
              <div onClick={() => handleDelete(item)} key={index} className={cx(['item', 'selected'])}>
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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(DeliverShop)