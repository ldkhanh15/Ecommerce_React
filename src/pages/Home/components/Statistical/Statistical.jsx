import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import data from './data';
import TopProduct from '@/components/TopProduct/TopProduct';

const cx=classNames.bind(styles);
const Statistical = () => {
  return (
    <div className={cx('container')}>
      {data.map((item)=>(
        <div key={item.id} className={cx('item')}>
            <h2>{item.title}</h2>
            <div className={cx('product')}>
              {item.product.map((value)=>(
                <TopProduct item={value} key={value.id}/>
              ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Statistical