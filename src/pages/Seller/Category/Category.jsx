import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import UiCate from './UiCate/UiCate'
import Button from '@/components/Button'
import { deleteCate, getAllCate, searchCategory } from '@/services/categoryService'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '@/components/Search/Search'
import Loading from '@/components/Loading/Loading'
const cx = classNames.bind(styles)
const Category = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const handlePageChange = (newPage) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', newPage);
    navigate(`?${queryParams.toString()}`);
    setPage(newPage);
  };
  useEffect(() => {
    const getData = async () => {
      let res = await getAllCate(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
      
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [location.search])
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
      setLoading(true);
      let res = await deleteCate(id)
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
      setLoading(false)
    }
  }
  return (
    <>
      {loading ? <Loading /> : <div className={cx('container')}>
        <h1>Category</h1>
        <div className={cx('main')}>
          <div className={cx('header')}>
            <div className={cx('search')}>
              <Search onSearch={searchCategory} setData={setData} />
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
                    <td className={cx('stt')}>{index + 1}</td>
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
          <div className={cx('navigation')}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === '1'}>
              Previous
            </button>
            <button onClick={() => handlePageChange(Number(page) + 1)} disabled={page === `${pages.length}`}>
              Next
            </button>
          </div>
        </div>
        <UiCate setLoading={setLoading} open={open} dataChildren={dataChildren} setOpen={setOpen} />
      </div>}
    </>
  )
}

export default Category