import BlogLayout from '@/components/Blog/BlogLayout/BlogLayout'
import useScrollToTop from '@/hooks/useScrollToTop'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import React from 'react'
import { data, cate, thumbnail, trendingProduct, tag } from './data'
import { BiCategory, BiSearch } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'
import NewProduct from '@/components/NewProduct/NewProduct'
import { LiaTimesSolid } from 'react-icons/lia'
import SideBar from '@/components/Blog/SideBar/SideBar'

const cx = classNames.bind(styles)
const Blog = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <div className={cx('header')}>
            <div className={cx('h-left')}>
              <div className={cx('image')}>
                <img src="/category-1.svg" alt="" />
              </div>
              <div className={cx('text')}>
                Recipes Articles
              </div>
            </div>
            <div className={cx('h-right')}>
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
          <div className={cx('footer')}>
            {data.map((value, index) => (
              <BlogLayout data={value} key={index} />
            ))}
          </div>
          <div className={cx('navigation')}>
            <ul>
              <li className={cx('active')}>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>

        <div className={cx('right')}>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Blog