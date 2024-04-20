import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import { deleteBlog, getBlogAdmin } from '@/services/blogService'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const cx = classNames.bind(styles)
const Blog = () => {
  const [data, setData] = useState([])
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
      let res = await getBlogAdmin(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    getData();
  }, [location.search])
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      let res = await deleteBlog(id);
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    }
  }
  return (

    <div className={cx('container')}>
      <h1>Blog</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <input type="text" placeholder='Search a blog' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('btn-add')}>
            <Button to={'/seller/blog/add-blog'} primary large>Add new Blog</Button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>
                STT
              </td>
              <td>
                Author Name
              </td>
              <td>
                Blog Name
              </td>
              <td>
                Field
              </td>
              <td>
                Number of view
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
                  <td>{item.author.name}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className={cx('field')}>
                      <div className={cx('item')}>
                        {item.field}
                      </div>
                    </div>
                  </td>
                  <td>{item.view}</td>
                  <td>
                    <div className={cx('action')}>
                      <Link to={`/seller/blog/${item.id}`} className={cx(['btn', 'view'])}>
                        View
                      </Link>
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
    </div>
  )
}

export default Blog