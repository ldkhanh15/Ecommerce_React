import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import CreateComment from '@/components/CreateComment/CreateComment'
import ListComment from '@/pages/Blog/DetailBlog/components/ListComment/ListComment'
import { getProductComment } from '@/services/productService'

const cx = classNames.bind(styles)
const Review = (id) => {

  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getProductComment(id.id);
      setData(res.data)
    }
    getData();
  }, [])
  let stars = [0, 0, 0, 0, 0, 0];
  let avgStar = 0;
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      stars[data[i].star]++;
      avgStar += data[i].star;
    }
    avgStar /= data.length;
  }

  return (
    <div className={cx('container')}>
      <div className={cx('comment')}>
        <div className={cx('list-comment')}>
          <ListComment data={data} />
        </div>
        <div className={cx('rating-comment')}>
          <h4 className={cx('title')}>
            Customer reviews
          </h4>
          <div className={cx('rating')}>
            <div className={cx('rating-star')}>
              <div className={cx('star')}>

              </div>
            </div>
            <div className={cx('text')}>
              {avgStar} out of 5
            </div>
          </div>
          <div className={cx('table')}>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                5 star
              </h3>
              <div className={cx('range')}>
                <div style={{ width: `${data.length > 0 ? stars[5] * 100 / data.length : 0}%` }} className={cx('range-item')}>
                  {data.length > 0 ? stars[5] * 100 / data.length : 0}%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                4 star
              </h3>
              <div className={cx('range')}>
                <div style={{ width: `${data.length > 0 ? stars[4] * 100 / data.length : 0}%` }} className={cx('range-item')}>
                  {data.length > 0 ? stars[4] * 100 / data.length : 0}%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                3 star
              </h3>
              <div className={cx('range')}>
                <div style={{ width: `${data.length > 0 ? stars[3] * 100 / data.length : 0}%` }} className={cx('range-item')}>
                  {data.length > 0 ? stars[3] * 100 / data.length : 0}%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                2 star
              </h3>
              <div className={cx('range')}>
                <div style={{ width: `${data.length > 0 ? stars[2] * 100 / data.length : 0}%` }} className={cx('range-item')}>
                  {data.length > 0 ? stars[2] * 100 / data.length : 0}%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                1 star
              </h3>
              <div className={cx('range')}>
                <div style={{ width: `${data.length > 0 ? stars[1] * 100 / data.length : 0}%` }} className={cx('range-item')}>
                  {data.length > 0 ? stars[1] * 100 / data.length : 0}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateComment />
    </div>
  )
}

export default Review