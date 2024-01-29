import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import useScrollToTop from '@/hooks/useScrollToTop'
import UiModal from '@/components/UiModal/UiModal'
import Button from '@/components/Button'
import Description from './components/Description/Description'
import Additional from './components/Additional/Additional'
import Vendor from './components/Vendor/Vendor'
import Review from './components/Review/Review'
import { Helmet } from 'react-helmet'
const cx = classNames.bind(styles)

const ProductDetail = () => {
  useScrollToTop();
  const [info, setInfo] = useState(3);
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>
          All Natural Italian-Style Chicken Meatballs
        </title>
      </Helmet>
      <div className={cx('modal')}>
        <UiModal modal={false} />
      </div>
      <div className={cx('info')}>
        <div className={cx('header')}>
          <ul>
            <li onClick={() => setInfo(1)}>
              <Button className={info === 1 ? cx('active') : ''} outlineBox>Description</Button>
            </li>
            <li onClick={() => setInfo(2)}>
              <Button className={info === 2 ? cx('active') : ''} outlineBox>Additional info</Button>
            </li>
            <li onClick={() => setInfo(3)}>
              <Button className={info === 3 ? cx('active') : ''} outlineBox>Vendor</Button>
            </li>
            <li onClick={() => setInfo(4)}>
              <Button className={info === 4 ? cx('active') : ''} outlineBox>Review(3)</Button>
            </li>
          </ul>
        </div>
        <div className={cx('main')}>
          {info === 1 && <Description />}
          {info === 2 && <Additional />}
          {info === 3 && <Vendor />}
          {info === 4 && <Review />}
        </div>
      </div>
      <div className={cx('related')}>

      </div>
    </div>
  )
}

export default ProductDetail