import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import { getProductShop } from '@/services/productService'

const cx = classNames.bind(styles)
const Vendor = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getProductShop(id);
      setData(res.data)
    }
    getData();
  }, [])
  console.log(data);
  return (
    <div className={cx('container')}>
      {
        data.shop && <>
          <div className={cx('header')}>
            <div className={cx('top')}>
              <div className={cx('left')}>
                <img src={data.shop.avatar} alt="" />
              </div>
              <div className={cx('right')}>
                <div className={cx('name')}>
                  {data.shop.name}
                </div>
                <div className={cx('info')}>
                  <div className={cx('rating')}>
                    <div style={{ width: `${data.avgStar * 100 / 5}%` }} className={cx('star')}>

                    </div>
                  </div>
                  <div className={cx('text')}>
                    ({data.shop.comment} reviews)
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('bottom')}>
              <div className={cx('item')}>
                <span className={cx('image')}>
                  <img src="/images/service/icon-location.svg" alt="" />
                </span>
                <span className={cx('title')}>Address: </span>
                <span className={cx('value')}>
                  {data.shop.address}
                </span>
              </div>
              <div className={cx('item')}>
                <span className={cx('image')}>
                  <img src="/images/service/icon-contact.svg" alt="" />
                </span>
                <span className={cx('title')}>Contact Seller: </span>
                <span className={cx('value')}>
                  {data.shop.phone}
                </span>
              </div>
            </div>
          </div>
          <div className={cx('rating-percent')}>
            <div className={cx('item')}>
              <div className={cx('title')}>
                Rating
              </div>
              <div className={cx('number')}>
                {data.avgStar * 100 / 5}%
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}>
                Ship on time
              </div>
              <div className={cx('number')}>
                {data.avgStar * 100 / 5}%
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}>
                Chat response
              </div>
              <div className={cx('number')}>
                {data.avgStar * 100 / 5}%
              </div>
            </div>
          </div>
          <div className={cx('desc')}>
            {data.shop.introduce}
          </div></>
      }
    </div>
  )
}

export default Vendor