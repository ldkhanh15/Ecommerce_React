import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import UiBanner from './UiBanner/UiBanner'
import Button from '@/components/Button'
import { useEffect } from 'react'
import { deleteBanner, getAllBanner } from '@/services/bannerService'

const cx = classNames.bind(styles)
const Banner = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  useEffect(() => {
    const getData = async () => {
      let res = await getAllBanner();
      setData(res.data)
    }
    getData();
  }, [])
  
  const handleOpen = (data) => {
    let starts =data.start.split('T');
    let start = starts[0] + " "+starts[1].slice(0,-5);
    let ends =data.end.split('T');
    let end = ends[0] + " "+ends[1].slice(0,-5);
    setOpen(true)
    setDataChildren({
      ...data,
      start: start,
      end: end
    })
  }
  const handleAdd = () =>{
    setDataChildren({})
    setOpen(true)
  }
  const handleDelete = async(id) =>{
   if(confirm("Are you sure you want to delete this banner?")){
    let res = await deleteBanner(id)
    console.log(res);
   }
  }
  return (
    <div className={cx('container')}>
      <h1>Banner</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <input type="text" placeholder='Search a banner' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('btn-add')}>
            <Button onClick={() => handleAdd()} primary large>Add new Banner</Button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>
                STT
              </td>
              <td>
                Title
              </td>
              <td>
                Start
              </td>
              <td>
                End
              </td>
              <td>
                IsMain ?
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((item, index) => {
                let starts = item.start.split('T');
                let ends = item.end.split('T');

                return (
                  <tr key={index}>
                    <td className={cx('stt')}>{index + 1}</td>
                    <td>{item.title}</td>
                    <td> {starts[1].slice(0, -5)} {starts[0]}</td>
                    <td>{ends[1].slice(0, -5)} {ends[0]}</td>
                    <td>{String(item.main)}</td>
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
                )
              })
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
      <UiBanner dataChildren={dataChildren} open={open} setOpen={setOpen} />
    </div>
  )
}

export default Banner