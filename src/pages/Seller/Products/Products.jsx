import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import Button from '@/components/Button'
import { CiSearch } from 'react-icons/ci'
import { getProduct } from '@/services/shopService'
import { deleteProduct, searchProduct } from '@/services/productService'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Search from '@/components/Search/Search'
import Loading from '@/components/Loading/Loading'
const cx = classNames.bind(styles)
const Products = () => {
  const [data, setData] = useState([])
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const location = useLocation();
  const [loading, setLoading] = useState(false)
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
      let res = await getProduct(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [location.search])
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setLoading(true);
      let res = await deleteProduct(id);
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
      setLoading(false)
    }
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <h1>Products</h1>
          <div className={cx('main')}>
            <div className={cx('header')}>
              <div className={cx('search')}>
                <Search setData={setData} onSearch={searchProduct} />
              </div>
              <div className={cx('btn-add')}>
                <Button to={'/seller/products/add'} primary large>Add new product</Button>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <td>
                    STT
                  </td>
                  <td>
                    ID
                  </td>
                  <td>
                    Name
                  </td>
                  <td>
                    Price
                  </td>
                  <td>
                    Sold
                  </td>
                  <td>
                    Stock
                  </td>
                  <td>
                    Shop
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
                      <td>{index + 1}</td>
                      <td>#{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price} $</td>
                      <td>{item.sold}</td>
                      <td>{item?.detailProduct.quantity}</td>
                      <td>{item?.shop.name}</td>
                      <td >
                        <div className={cx('action')}>
                          <Link to={`/seller/products/${item.id}`} className={cx(['btn', 'view'])}>
                            View
                          </Link>
                          <button onClick={() => handleDelete(item.id)} className={cx(['btn', 'del'])}>
                            Delete
                          </button>
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
      }
    </>
  )
}

export default Products