import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteBill, getBillSeller } from '@/services/billService'
import { toast } from 'react-toastify'
import Loading from '@/components/Loading/Loading'

const cx = classNames.bind(styles)
const Order = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState();
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      let res = await getBillSeller(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData();
    setLoading(false)
  }, [location.search])
  let all = 0, completed = 0, cancelled = 0, wait = 0;
  if (data) {
    data.map(item => {
      all += item.totalPrice;
      completed += item.idStatus === '5' ? item.totalPrice : 0
      cancelled += item.idStatus === '6' ? item.totalPrice : 0
      wait += item.idStatus === '1' ? item.totalPrice : 0
    })
  }
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this order?')) {
      setLoading(true);
      let res = await deleteBill(id);
      res.code === 1 ? toast.success(res.message) : toast.error(res.message)
      setLoading(false);
    }
  }
  const handlePageChange = (newPage) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', newPage);
    navigate(`?${queryParams.toString()}`);
    setPage(newPage);
  };
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <h1>Orders</h1>
          <div className={cx('info')}>
            <div className={cx('item')}>
              <div className={cx('top')}>
                All Orders
              </div>
              <div className={cx('count')}>
                {all} $
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('top')}>
                Order Placed
              </div>
              <div className={cx('count')}>
                {wait} $
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('top')}>
                Completed Order
              </div>
              <div className={cx('count')}>
                {completed} $
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('top')}>
                Cancelled
              </div>
              <div className={cx('count')}>
                {cancelled} $
              </div>
            </div>
          </div>
          <div className={cx('list-order')}>
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
                    Date
                  </td>
                  <td>
                    Shop Name
                  </td>
                  <td>
                    Total
                  </td>
                  <td>
                    Status
                  </td>
                  <td>
                    Details
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  data && data.map((item, index) => {
                    let arr = item.createdAt.split(".");
                    let time = arr[0].split("T");
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>#{item.id}</td>
                        <td>{time[0]}</td>
                        <td>{item?.shop?.name}</td>
                        <td>{item.totalPrice}$</td>
                        <td><span className={cx(['status', `status_${item.idStatus}`])}>{item.status.status}</span></td>
                        <td className={cx('view')}>
                          <Link className={cx(['btn', 'view'])} to={`/seller/orders/${item.id}`}>View</Link>
                          <div onClick={() => handleDelete(item.id)} className={cx(['btn', 'delete'])}>Delete</div>
                        </td>
                      </tr>

                    )
                  })
                }
              </tbody>
            </table>
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

export default Order