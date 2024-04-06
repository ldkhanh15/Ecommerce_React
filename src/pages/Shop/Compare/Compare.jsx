import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiTrash } from 'react-icons/bi'
import useScrollToTop from '@/hooks/useScrollToTop'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { addCart, removeCompare, clearCompare } from '@/redux/action'


const cx = classNames.bind(styles)
const Compare = ({ compares, addCart, removeCompare, clearCompare }) => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Compare</title>
      </Helmet>
      <div className={cx('header')}>
        <h3>Products Compare</h3>
        <p>This is products list to compare</p>
      </div>
      <div className={cx('main')}>
        {
          compares.length > 0 ? <div className={cx('table')}>

            <table>
              <tr>
                <th className={cx('title')}>Preview</th>
                {
                  compares.map((item, index) => (
                    <td key={index} className={cx('image')}>
                      <img src={item.mainImage} alt="" />
                    </td>
                  ))
                }

              </tr>
              <tr>
                <th className={cx('title')}>Name</th>
                {
                  compares.map((item, index) => (
                    <td key={index} className={cx('name')}>
                      {item.name}
                    </td>
                  ))
                }

              </tr>
              <tr>
                <th className={cx('title')}>Brand</th>
                {
                  compares.map((item, index) => (
                    <td key={index} className={cx('price')}>
                      {item.brand}
                    </td>
                  ))
                }

              </tr>
              <tr>
                <th className={cx('title')}>
                  Price
                </th>
                {
                  compares.map((item, index) => (
                    <td key={index} className={cx('price')}>
                      ${Math.round(item.price * (100 - item.sale)) / 100}
                    </td>
                  ))
                }

              </tr>
              <tr>
                <th className={cx('title')}>
                  Rating
                </th>
                {
                  compares.map((item, index) => {
                    let avgStar = 0
                    if (item.review.length) {
                      avgStar = item.review.reduce((acc, cur) => {
                        return acc + cur.star
                      }, 0)
                      avgStar /= item.review.length
                    }
                    return (
                      <td key={index} className={cx('rating')}>
                        <div className={cx('rating-star')}>
                          <div className={cx('star')} style={{ width: `${avgStar / 5 * 100}%` }}></div>
                        </div>
                        <span>({item.review.length})</span>
                      </td>
                    )
                  })
                }


              </tr>
              <tr>
                <th className={cx('title')}>
                  Introduce
                </th>
                {
                  compares.map((item, index) => (
                    <td key={index} className={cx('desc')}>
                      {item.introduce}
                    </td>
                  ))
                }

              </tr>
              <tr>
                <th className={cx('title')}>
                  Buy
                </th>
                {
                  compares.map((item, i) => (
                    <td onClick={()=>addCart(item)} key={i} className={cx('buy')}>
                      <div className={cx('add')}>
                        Add to cart
                      </div>
                    </td>

                  ))
                }
              </tr>
              <tr>
                <th className={cx('title')}>

                </th>
                {
                  compares.map((item, index) => (
                    <td onClick={() => removeCompare(item.id)} key={index} className={cx('remove')}>
                      <BiTrash className={cx('icon')} />
                      <span className={cx('text')}>
                        Remove
                      </span>
                    </td>
                  ))
                }

              </tr>

            </table>
            <span onClick={()=>clearCompare()}>Clear All</span>
          </div> : <h3>List Compare has no product</h3>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  compares: state.compares
});

const mapDispatchToProps = {
  addCart,
  removeCompare,
  clearCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);