import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import UiBanner from './UiBanner/UiBanner'
import Button from '@/components/Button'
import { useEffect } from 'react'
import { deleteBanner, getAllBanner, searchBanner } from '@/services/bannerService'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '@/components/Search/Search'
import Loading from '@/components/Loading/Loading'
const cx = classNames.bind(styles)
const Banner = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [dataChildren, setDataChildren] = useState({})
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false)

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
      let res = await getAllBanner(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    getData();
  }, [location.search]);

  const handleOpen = (data) => {
    let starts = data.start.split('T');
    let start = starts[0] + " " + starts[1].slice(0, -5);
    let ends = data.end.split('T');
    let end = ends[0] + " " + ends[1].slice(0, -5);
    setOpen(true)
    setDataChildren({
      ...data,
      start: start,
      end: end
    })
  }
  const handleAdd = () => {
    setDataChildren({})
    setOpen(true)
  }
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this banner?")) {
      let res = await deleteBanner(id)
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    }
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <h1>Banner</h1>
          <div className={cx('main')}>
            <div className={cx('header')}>
              <div className={cx('search')}>
                <Search onSearch={searchBanner} setData={setData} />
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
                            <div onClick={() => handleDelete(item.id)} className={cx(['btn', 'delete'])}>
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
              <button onClick={() => handlePageChange(page - 1)} disabled={page === '1'}>
                Previous
              </button>
              <button onClick={() => handlePageChange(Number(page) + 1)} disabled={page === `${pages.length}`}>
                Next
              </button>
            </div>
          </div>
          <UiBanner setLoading={setLoading} dataChildren={dataChildren} open={open} setOpen={setOpen} />
        </div>
      }
    </>
  )
}

export default Banner