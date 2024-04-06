import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { GoTrash } from "react-icons/go";
import useScrollToTop from '@/hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import { addCart, removeWhiteList, clearWhiteList } from '@/redux/action';
import { connect } from 'react-redux';
const cx = classNames.bind(styles)
const WishList = ({ addCart, whitelists, clearWhiteList,removeWhiteList }) => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Wish List</title>
      </Helmet>
      <div className={cx('main')}>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Stock Status</td>
              <td>Action</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {
              whitelists.map((whitelist => {
                let avgStar = 0
                if (whitelist.review.length) {
                  avgStar = whitelist.review.reduce((acc, cur) => {
                    return acc + cur.star
                  }, 0)
                  avgStar /= whitelist.review.length
                }
                return (
                  <tr key={whitelist.id}>
                    <td className={cx('product')}>
                      <div className={cx('detail')}>
                        <div className={cx('left')}>
                          <img src={whitelist.mainImage} alt="" />
                        </div>
                        <div className={cx('right')}>
                          <div className={cx('name')}>
                            {whitelist.name}
                          </div>
                          <div className={cx('rating')}>
                            <div style={{ width: `${avgStar / 5 * 100}%` }} className={cx('star')}></div>
                          </div>

                        </div>
                      </div>
                    </td>
                    <td className={cx('price')}>
                      ${Math.floor(whitelist.price * (100 - whitelist.sale)) / 100}
                    </td>
                    <td className={cx('status-stock')}>
                      <div className={cx('in-stock')}>
                        In Stock
                      </div>
                    </td>
                    <td className={cx('action')}>
                      <div onClick={() => addCart(whitelist)} className={cx('add')}>
                        Add to cart
                      </div>
                    </td>
                    <td onClick={() => removeWhiteList(whitelist.id)} className={cx('trash')}>
                      <GoTrash className={cx('icon')} />
                    </td>
                  </tr>

                )
              }))
            }
          </tbody>
        </table>
        <span onClick={() => clearWhiteList()} className={cx('clear')}>
          Clear All
        </span>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  whitelists: state.whitelists,
});

const mapDispatchToProps = {
  addCart,
  removeWhiteList,
  clearWhiteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);