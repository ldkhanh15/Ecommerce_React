import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteShop, getShop, searchVendor } from '@/services/shopService'
import { toast } from 'react-toastify'
import Search from '@/components/Search/Search'
import Loading from '@/components/Loading/Loading'

const cx = classNames.bind(styles)
const Vendor = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
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
      let res = await getShop(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [location.search]);
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this vendor?')) {
      setLoading(true);
      let res = await deleteShop(id);
      if (res.code) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      setLoading(false)
    }
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <h1>Vendors</h1>
          <div className={cx('main')}>
            <div className={cx('header')}>
              <div className={cx('search')}>
                <Search setData={setData} onSearch={searchVendor} />
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
                    Phone
                  </td>
                  <td>
                    Address
                  </td>
                  <td>
                    Number of purchases
                  </td>
                  <td>
                    Total order
                  </td>
                  <td>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  data && data?.map((item, index) => {
                    let revenue = item.bill.reduce((acc, item) => {
                      return acc + item.totalPrice;
                    }, 0)

                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.bill.length}</td>
                        <td>{revenue}</td>
                        <td>
                          <div className={cx('action')}>
                            <Link to={`/seller/account/${item.id}`} className={cx(['btn', 'view'])}>
                              View
                            </Link>
                            <button onClick={() => handleDelete(item.id)} className={cx(['btn', 'del'])}>
                              Delete
                            </button>
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
        </div>
      }
    </>
  )
}

export default Vendor