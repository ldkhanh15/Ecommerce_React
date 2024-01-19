import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { thumbnail, color, condition, cate, product } from './data'
import NewProduct from '@/components/NewProduct/NewProduct'
import { BiCategory } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import Product from '@/components/Product/Product'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css';
import useScrollToTop from '@/hooks/useScrollToTop'

const cx = classNames.bind(styles)

const Shop = () => {
  useScrollToTop()
  const [con, setCon] = useState(0);
  let initState = [];
  // eslint-disable-next-line array-callback-return
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
    <div className={cx('container')}>
      <div className={cx('side-bar')}>
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
                  {item.title}
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
              {condition.map((item, index) => (
                <div key={index} onClick={() => setCon(index)} className={con === index ? cx('item', 'active') : cx('item')} >{item.title}</div>
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
          <img src="/banner-11.png" alt="" />
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

      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('left')}>
            We found <strong>21</strong> items for you
          </div>
          <div className={cx('right')}>
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
        <div className={cx('product')}>
          {product.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
        <div className={cx('navigation')}>
            <ul>
              <li className={cx('active')}>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>51</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Shop