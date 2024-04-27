import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import UiPayment from './UiPayment/UiPayment'
import Button from '@/components/Button'
import { deletePayment, getPayment, searchPayment } from '@/services/paymentService'
import { toast } from 'react-toastify';
import Search from '@/components/Search/Search'

const cx = classNames.bind(styles)
const Payment = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  useEffect(() => {
    const getData = async () => {
      let res = await getPayment();
      setData(res.data)
    }
    getData();
  }, [])

  const handleOpen = (data) => {
    setOpen(true)
    setDataChildren({
      ...data,
    })
  }
  const handleAdd = () => {
    setDataChildren({})
    setOpen(true)
  }
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this payment?")) {
      let res = await deletePayment(id)
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Payment</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <Search onSearch={searchPayment} setData={setData} />
          </div>
          <div className={cx('btn-add')}>
            <Button onClick={() => handleAdd()} primary large>Add new Payment</Button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>
                STT
              </td>
              <td>
                Name
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((item, index) => (
                <tr key={index}>
                  <td className={cx('stt')}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className={cx('action')}>
                      <div onClick={() => handleOpen(item)} className={cx(['btn', 'view'])}>
                        View
                      </div>
                      <div onClick={() => handleDelete(item.id)} className={cx(['btn', 'delete'])}>
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>
      <UiPayment dataChildren={dataChildren} open={open} setOpen={setOpen} />
    </div>
  )
}

export default Payment