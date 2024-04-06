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
  const [select, setSelect] = useState(true);
  const [data, setData] = useState([])
  const [input, setInput] = useState(true);
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleSelectChange = (event) => {
    if (event.target.value !== '') {
      setInput(false)
    } else {
      setSelect(true)
      setInput(true)
    }
  };
  const handleInputChange = (event) => {
    if (event.target.value !== '') {
      setSelect(false)
    } else {
      setSelect(true)
      setInput(true)
    }
  }
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
        <div className={cx('left')}>
          <div className={cx('shipping')}>
            <h2>Calculator Shipping</h2>
            <div className={cx('rate')}>Flat rate: <strong>5%</strong></div>
            <select name="" id="">
              <option value="">Choose a address</option>
              <option value="">Address1</option>
              <option value="">Address2</option>
              <option value="">Address3</option>
            </select>
          </div>
          <div className={cx('voucher')}>
            <h2>Apply Voucher</h2>
            <label htmlFor="options">Select or Enter code</label>
            <select className={select ? '' : cx('disabled')} id="options" onChange={handleSelectChange}>
              <option value="" defaultChecked>Select a voucher</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>

            <label htmlFor="input">Or</label>
            <div className={cx('code')}>
              <input
                id='input'
                className={input ? cx('input') : cx(['input', 'disabled'])}
                type="text"
                placeholder="Enter code..."
                onChange={handleInputChange}
              />
              <div className={cx('btn')}><Button small primary leftIcon={<BiShoppingBag />}>Apply</Button></div>
            </div>

          </div>
        </div>
        <div className={cx('right')}>
          <h2>Cart Totals</h2>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td className={cx('price')}>
                ${total}
              </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free Shipping</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className={cx('price')}>${total}</td>
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