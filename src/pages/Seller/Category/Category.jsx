import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import UiCate from './UiCate/UiCate'
import Button from '@/components/Button'
import { deleteCate, getAllCate } from '@/services/categoryService'

const cx = classNames.bind(styles)
const Category = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  useEffect(() => {
    const getData = async () => {
      let res = await getAllCate();
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
    if (confirm("Are you sure you want to delete this category?")) {
      let res = await deleteCate(id)
      console.log(res);
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Category</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <input type="text" placeholder='Search a category' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('btn-add')}>
            <Button onClick={() => handleAdd()} primary large>Add new Category</Button>
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
                Image
              </td>
              <td>
                Quantity product
              </td>
              <td>
                IsFeature ?
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
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{`${item.featured}`}</td>
                  <td>
                    <div className={cx('action')}>
                      <div onClick={() => handleOpen(item)} className={cx(['btn', 'view'])}>
                        View
                      </div>
                      <div onClick={()=>handleDelete(item.id)} className={cx(['btn', 'delete'])}>
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
        <div className={cx('navigation')}>
          <ul>
            <li className={cx('active')}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>51</li>
          </ul>
        </div>
      </div>
      <UiCate open={open} dataChildren={dataChildren} setOpen={setOpen} />
    </div>
  )
}

export default Category