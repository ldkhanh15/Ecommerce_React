import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiShoppingBag, BiTrash } from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@/components/Button'
import { FaFingerprint, FaRegCalendarMinus } from "react-icons/fa";
import useScrollToTop from '@/hooks/useScrollToTop'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { addProduct, removeProduct, addCart, removeCart, updateCart, clearCart } from '@/redux/action';
import { connect } from 'react-redux';
const cx = classNames.bind(styles)
const Cart = ({ clearCart, products, addProduct, removeProduct, carts, addCart, removeCart, updateCart }) => {
  useScrollToTop();
  const handleChange = (e, id) => {
    updateCart({
      id,
      quantity: e.target.value
    })

  }

  const handleAdd = (item) => {
    let index = products.findIndex(p => p.id === item.id);
    if (index !== -1) {
      removeProduct(item.id);
    } else {
      addProduct(item)
    }

  }
  let total = 0;
  if (products) {
    total = products.reduce((value, current) => {
      return value + current.quantity * Math.floor(current.price * (100 - current.sale)) / 100;
    }, 0)
  }

  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className={cx('header')}>
        <h3 className={cx('title')}>Your Cart</h3>
        <div className={cx('sub-title')}>
          <div className={cx('left')}>
            Carefully check the information before checkout
          </div>
          <div className={cx('right')}>
            <BiTrash className={cx('icon')} />
            <span onClick={() => clearCart()} className={cx('text')}>Clear Cart</span>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>Product</td>
              <td>Unit Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {
              carts.map((item, index) => {
                let isActive = products.some((selectP, index) => {
                  return selectP.id === item.id;
                })
                let avgStar = 0
                if (item.review.length) {
                  avgStar = item.review.reduce((acc, cur) => {
                    return acc + cur.star
                  }, 0)
                  avgStar /= item.review.length
                }
                return (
                  <tr key={index}>
                    <td onClick={() => handleAdd(item)} className={isActive ? cx(['product', 'active']) : cx(['product'])}>
                      <div className={cx('detail')}>
                        <div className={cx('left')}>
                          <img src={item.mainImage} alt="" />
                        </div>
                        <div className={cx('right')}>
                          <Link to={`/products/${item.id}`} className={cx('name')}>
                            {item.name}
                          </Link >
                          <div className={cx('rating')}>
                            <div style={{ width: `${avgStar / 5 * 100}%` }} className={cx('star')}></div>
                          </div>
                          <div className={cx('type')}>
                              {item.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={cx('price')}>
                      ${Math.floor(item.price * (100 - item.sale)) / 100}
                    </td>
                    <td className={cx('quantity')}>
                      <input type="number" title='quantity' onChange={(e) => handleChange(e, item.id)} min={1} defaultValue={item.quantity} />
                    </td>
                    <td className={cx('sub-total')}>
                      ${item.quantity * Math.floor(item.price * (100 - item.sale)) / 100}
                    </td>
                    <td onClick={() => removeCart(item.id)} className={cx('trash')}>
                      <BiTrash />
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
        <div className={cx('footer')}>
          <div className={cx('clear')}>
            <LiaTimesSolid className={cx('icon')} />
            <span className={cx('text')}>Clear Cart</span>
          </div>
          <div className={cx('shopping')}>
            <Button primary leftIcon={<BiShoppingBag />} large>Continue Shopping</Button>
          </div>
          <div className={cx('line')}>
            <FaFingerprint className={cx('icon')} />
          </div>
        </div>
      </div>
      <div className={cx('check-out')}>
       
        <div className={cx('right')}>
          <h2>Cart Totals</h2>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td className={cx('price')}>
                ${total.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className={cx('price')}>${(total+5).toFixed(2)}</td>
            </tr>
          </table>
          <Link to={'/shop/checkout'} className={cx('btn')}>
            <Button large leftIcon={<FaRegCalendarMinus />} primary>Proceed To CheckOut</Button>
          </Link>
        </div>
      </div>
    </div >
  )
}


const mapStateToProps = (state) => ({
  products: state.products,
  carts: state.carts
});

const mapDispatchToProps = {
  addProduct,
  removeProduct,
  addCart,
  removeCart,
  updateCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);