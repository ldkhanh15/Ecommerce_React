import BlogLayout from '@/components/Blog/BlogLayout/BlogLayout'
import useScrollToTop from '@/hooks/useScrollToTop'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'
import SideBar from '@/components/Blog/SideBar/SideBar'
import { Helmet } from 'react-helmet';
import { getAllBlog } from '@/services/blogService'
import { useLocation, useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
const Blog = () => {
  useScrollToTop()
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
      let res = await getAllBlog(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    getData();
  }, [location.search]);
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <div className={cx('header')}>
            <div className={cx('h-left')}>
              <div className={cx('image')}>
                <img src="/images/cate/category-1.svg" alt="" />
              </div>
              <div className={cx('text')}>
                Recipes Articles
              </div>
            </div>
            <div className={cx('h-right')}>
              <div className={cx('show')}>
                <div className={cx('content')}>
                  <BiCategory className={cx('icon')} />
                  <div className={cx('text')}>
                    Show:
                  </div>
                </div>
                <select name="show" id="">
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">15</option>
                </select>
              </div>
              <div className={cx('show')}>
                <div className={cx('content')}>
                  <FaSort className={cx('icon')} />
                  <div className={cx('text')}>
                    Sort by:
                  </div>
                  <select name="sort" id="">
                    <option value="">Default</option>
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('footer')}>
            {data && data.map((value, index) => (
              <BlogLayout data={value} key={index} />
            ))}
          </div>
          <div className={cx('navigation')}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === '1'}>
              Previous
            </button>
            <button onClick={() => handlePageChange(Number(page) + 1)} disabled={page === `${pages.length}`}>
              Next
            </button>
          </div>
        </div>

        <div className={cx('right')}>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Blog