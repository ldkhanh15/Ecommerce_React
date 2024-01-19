import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiTrash } from 'react-icons/bi'
import useScrollToTop from '@/hooks/useScrollToTop'

const cx = classNames.bind(styles)
const Compare = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3>Products Compare</h3>
        <p>This is products list to compare</p>
      </div>
      <div className={cx('main')}>
        <table>
          <tr>
            <th className={cx('title')}>Preview</th>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
            <td className={cx('image')}>
              <img src="/product-1-2.jpg" alt="" />
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>Name</th>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
            <td className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Price
            </th>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
            <td className={cx('price')}>
              $238.85
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Rating
            </th>
            <td className={cx('rating')}>

              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
            <td className={cx('rating')}>
              <div className={cx('rating-star')}>
                <div className={cx('star')} style={{ width: '70%' }}></div>
              </div>
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Description
            </th>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
            <td className={cx('desc')}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi obcaecati saepe voluptates exercitationem in tempora impedit dolorem unde ullam molestias earum eius, odio inventore debitis eum et repudiandae maiores eos!
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Color
            </th>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
            <td className={cx('color')}>
              Đỏ
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Stock
            </th>
            <td className={cx(['stock', 'in'])}>
              In Stock
            </td>
            <td className={cx(['stock', 'out'])}>
              Out Stock
            </td>
            <td className={cx(['stock', 'out'])}>
              Out Stock
            </td>
            <td className={cx(['stock', 'in'])}>
              In Stock
            </td>
            <td className={cx(['stock', 'in'])}>
              In Stock
            </td>
            <td className={cx(['stock', 'out'])}>
              Out Stock
            </td>
            <td className={cx(['stock', 'in'])}>
              In Stock
            </td>
            <td className={cx(['stock', 'in'])}>
              In Stock
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Weight
            </th>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
            <td className={cx('weight')}>
              150 gram
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Dimensions
            </th>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
            <td className={cx('dimension')}>
              N/A
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>
              Buy
            </th>
            <td className={cx('buy')}>
              <div className={cx('add')}>
                Add to cart
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('contact')}>
                Contact us
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('contact')}>
                Contact us
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('add')}>
                Add to cart
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('add')}>
                Add to cart
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('contact')}>
                Contact us
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('add')}>
                Add to cart
              </div>
            </td>
            <td className={cx('buy')}>
              <div className={cx('add')}>
                Add to cart
              </div>
            </td>
          </tr>
          <tr>
            <th className={cx('title')}>

            </th>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
            <td className={cx('remove')}>
              <BiTrash className={cx('icon')} />
              <span className={cx('text')}>
                Remove
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Compare