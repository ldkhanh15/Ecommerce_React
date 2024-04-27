import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { BiCategory } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'
import VendorList from '@/components/VendorList/VendorList'
import { Helmet } from 'react-helmet'
import { getAllShop, getShop } from '@/services/shopService'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '@/components/Loading/Loading'
const cx = classNames.bind(styles)
const Vendor = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handlePageChange = (newPage) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', newPage);
    navigate(`?${queryParams.toString()}`);
    setPage(newPage);
  };
  useEffect(() => {
    const getData = async () => {
      let res = await getAllShop(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData();
    setTimeout(() => {

      setLoading(false)
    }, 1000)
  }, [location.search]);
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <Helmet>
            <title>Vendor</title>
          </Helmet>
          <div className={cx('header')}>
            <h1>Vendor List</h1>
            <div className={cx('input')}>
              <input type="text" placeholder='Search Vendors (by Name or ID)...' />
              <CiSearch className={cx('icon')} />
            </div>
          </div>
          <div className={cx('action')}>
            <div className={cx('left')}>
              We have <strong>{data.count}</strong> vendors now.
            </div>
            <div className={cx('right')}>
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
          <div className={cx('list-vendor')}>
            {
              data?.data?.map((item, index) => (
                <VendorList key={index} data={item} />
              ))
            }
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
      }
    </>
  )
}

export default Vendor