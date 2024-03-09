import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import useScrollToTop from '@/hooks/useScrollToTop'
import UiModal from '@/components/UiModal/Product/UiProduct'
import Button from '@/components/Button'
import Description from './components/Description/Description'
import Additional from './components/Additional/Additional'
import Vendor from './components/Vendor/Vendor'
import Review from './components/Review/Review'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '@/services/productService'
const cx = classNames.bind(styles)

const ProductDetail = () => {
  let { id } = useParams()
  useScrollToTop();
  const [info, setInfo] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getProductDetail(id);
      setData(res.data)
    }
    getData();
  }, [])
  return (
    <div className={cx('container')}>
      {
        data && <>
          <Helmet>
            <title>
              {data.name}
            </title>
          </Helmet>
          <div className={cx('modal')}>
            <UiModal data={data} modal={false} />
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
                  <Button className={info === 4 ? cx('active') : ''} outlineBox>Review({data?.review?.length})</Button>
                </li>
              </ul>
            </div>
            <div className={cx('main')}>
              {info === 1 && <Description data={data?.detailProduct?.description} />}
              {info === 2 && <Additional data={data?.detailProduct?.additional} />}
              {info === 3 && <Vendor />}
              {info === 4 && <Review id={data.id}/>}
            </div>
          </div>
          <div className={cx('related')}>

          </div>
        </>
      }
    </div>
  )
}

export default ProductDetail