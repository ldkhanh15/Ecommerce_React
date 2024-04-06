import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import UiSize from './UiSize/UiSize'
import { deleteSize, getSize } from '@/services/productService'

const cx = classNames.bind(styles)
const Size = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  useEffect(() => {
    const getData = async () => {
      let res = await getSize();
      setData(res.data)
    }
    getData();
  }, [])
  console.log(data);
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
    if (confirm("Are you sure you want to delete this size?")) {
      let res = await deleteSize(id)
      console.log(res);
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Size</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <input type="text" placeholder='Search a size' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('btn-add')}>
            <Button onClick={() => handleAdd()} primary large>Add new Size</Button>
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
                  <td className={cx('stt')}>{index+1}</td>
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
      <UiSize open={open} dataChildren={dataChildren} setOpen={setOpen} />
    </div>
  )
}

export default Size