import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import CreateComment from '@/components/CreateComment/CreateComment'
import ListComment from '@/pages/Blog/DetailBlog/components/ListComment/ListComment'

const cx = classNames.bind(styles)
const Review = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('comment')}>
        <ListComment />
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
              4.8 out of 5
            </div>
          </div>
          <div className={cx('table')}>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                5 star
              </h3>
              <div className={cx('range')}>
                <div className={cx('range-item')}>
                  50%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                4 star
              </h3>
              <div className={cx('range')}>
                <div className={cx('range-item')}>
                  50%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                3 star
              </h3>
              <div className={cx('range')}>
                <div className={cx('range-item')}>
                  50%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                2 star
              </h3>
              <div className={cx('range')}>
                <div className={cx('range-item')}>
                  50%
                </div>
              </div>
            </div>
            <div className={cx('item')}>
              <h3 className={cx('title')}>
                1 star
              </h3>
              <div className={cx('range')}>
                <div className={cx('range-item')}>
                  50%
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