import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import Voucher from '@/components/Voucher/Voucher'
import { getVoucherOfShop, searchVoucher } from '@/services/voucherService'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Search from '@/components/Search/Search'
import Loading from '@/components/Loading/Loading'
const cx = classNames.bind(styles)
const Vouchers = () => {
  const [data, setData] = useState([])
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
      let res = await getVoucherOfShop(page);
      let v = Array.from({ length: res.pages }, (_, index) => index + 1);
      setPages(v);
      setData(res.data);
      setPage(searchParams.get('page'));
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, [location.search])
  const nest = {
    name: 'Nested',
    avatar: '/images/logo/logo.svg'
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          <h1>Vouchers</h1>
          <div className={cx('header')}>
            <div className={cx('left')}>
              <Search setData={setData} onSearch={searchVoucher} />
            </div>
            <div className={cx('right')}>
              <Button to={'/seller/vouchers/add-voucher'} primary large>Add new voucher</Button>
            </div>
          </div>
          <div className={cx('list')}>
            {data.map((item, index) => (
              <Link to={`/seller/vouchers/${item.id}`}>
                <Voucher key={index} data={item} shop={item.shop ? item.shop : nest} />
              </Link>
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
      }
    </>
  )
}

export default Vouchers