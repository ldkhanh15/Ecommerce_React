import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import NewProduct from '@/components/NewProduct/NewProduct'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css';
import VendorList from '../VendorList/VendorList'
const cx = classNames.bind(styles)
const ProductSideBar = ({ thumbnail, color, condition, cate, shop }) => {
  const [con, setCon] = useState(0);
  let initState = [];

  color.map((value, index) => {
    initState[index] = false;
  })
  const [col, setCol] = useState([initState]);
  const [state, setState] = useState({ min: 0, max: 100 })
  const handleCheckbox = (index) => {
    col[index] = !col[index];
    setCol([...col])
  }

  return (
    <div className={cx('side-bar')}>
      <div className={cx('shop')}>
        {shop && <VendorList data={shop} sideBar={true} />}
      </div>
      <div className={cx('cate')}>
        <h3 className={cx('title')}>
          Category
        </h3>
        <ul>
          {cate.map((item, index) => (
            <li key={index}>
              <div className={cx('image')}>
                <img src={item.image} alt="" />
              </div>
              <div className={cx('title')}>
                {item.name}
              </div>
              <div className={cx('quantity')}>
                {item.quantity}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx('filter')}>
        <h3 className={cx('title')}>
          Fill by price
        </h3>
        <div className={cx('price')}>
          <InputRange
            maxValue={500}
            minValue={0}
            value={state}
            step={1}
            onChange={value => setState({ ...value })}
          />
        </div>
        <div className={cx('color')}>
          <p className={cx('title')}>
            Color
          </p>
          <div className={cx('input')}>
            {color.map((item, index) => (
              <div key={index} className={cx('input-checkbox')}>
                <input onChange={(e) => console.log(e.target.value)} id={item.name} className={cx('item')} value={item.title} name="color" type="checkbox" />
                <label className={col[index] === true ? cx('active') : ''} onClick={() => handleCheckbox(index)} htmlFor={item.name}>{item.title}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={cx('condition')}>
          <p className={cx('title')}>
            Item Condition
          </p>
          <div className={cx('detail')}>
            <div onClick={() => setCon(0)} className={con === 0 ? cx('item', 'active') : cx('item')} >All</div>
            {condition.map((item, index) => (
              <div key={index + 1} onClick={() => setCon(index + 1)} className={con === index + 1 ? cx('item', 'active') : cx('item')} >{item.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={cx('new-product')}>
        <h3 className={cx('title')}>
          New products
        </h3>
        <div className={cx('product')}>
          {thumbnail.map((item, index) => (
            <NewProduct key={index} data={item} />
          ))}
        </div>
      </div>
      <div className={cx('banner')}>
        <img src="/images/banner/banner-11.png" alt="" />
        <div className={cx('content')}>
          <span className={cx('author')}>
            Oganic
          </span>
          <h4 className={cx('text')}>
            Save 17%
            <br />
            on <strong>Oganic</strong> Juice
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ProductSideBar