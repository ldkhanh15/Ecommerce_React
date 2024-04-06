import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import { deleteBlog, getAllBlog } from '@/services/blogService'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Blog = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getAllBlog();
      setData(res.data)
    }
    getData()
  }, [])
  console.log(data);
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      let res = await deleteBlog(id);
      console.log(res);
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
          <ul>
            <li className={cx('active')}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>51</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Blog