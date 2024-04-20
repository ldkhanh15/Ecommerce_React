import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { useEffect } from 'react'
import { deleteUser, getCustomer } from '@/services/userService'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const cx = classNames.bind(styles)
const Customer = () => {
  const [data, setData] = useState([]);
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
      let res = await getCustomer(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
      console.log(res);
    }
    getData();
  }, [location.search])

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      let res = await deleteUser(id);
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Customers</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('search')}>
            <input type="text" placeholder='Search a customer' />
            <CiSearch className={cx('icon')} />
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
                Email
              </td>
              <td>
                Phone
              </td>
              <td>
                Number of purchases
              </td>
              <td>
                Number of successful orders
              </td>
              <td>
                Total purchase order
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {
              data && data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.bill[0]?.totalOrders}</td>
                  <td>{item.bill[0]?.successfulOrders}</td>
                  <td>{item.bill[0]?.totalPrice}$</td>
                  <td>
                    <div className={cx('action')}>
                      <Link to={`/seller/customers/${item.id}`} className={cx(['btn', 'view'])}>
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
  )
}

export default Customer