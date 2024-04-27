import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { thumbnail, color } from './data'
import { BiCategory } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import Product from '@/components/Product/Product'
import 'react-input-range/lib/css/index.css';
import useScrollToTop from '@/hooks/useScrollToTop'
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar'
import { Helmet } from 'react-helmet'
import { getProduct, getSize } from '@/services/productService';
import { getCate } from '@/services/categoryService';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';

const cx = classNames.bind(styles)

const Shop = ({ shop }) => {
  useScrollToTop()
  const [data, setData] = useState([])
  const [cate, setCate] = useState([])
  const [size, setSize] = useState([])
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);
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
      let resProduct = await getProduct(page);
      let resCate = await getCate();
      let resSize = await getSize();
      setData(resProduct.data)
      setCate(resCate.data)
      setSize(resSize.data)
      let v = Array.from({ length: resProduct.pages }, (_, index) => index + 1);
      setPages(v);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData()
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [location.search])
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <Helmet>
            <title>Product</title>
          </Helmet>
          <div className={cx('side-bar')}>
            <ProductSideBar shop={shop} color={color} thumbnail={thumbnail} cate={cate} condition={size} />
          </div>

          <div className={cx('main')}>
            <div className={cx('header')}>
              <div className={cx('left')}>
                We found <strong>{data.length}</strong> items for you
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
            <div className={cx('product')}>
              {data?.map((item) => (
                <Product key={item.id} data={item} />
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
        </div>
      }
    </>
  )
}

export default Shop