import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Map from '@/components/Map/Map'
import Button from '@/components/Button'
import { IoLocationOutline } from 'react-icons/io5'
import useScrollToTop from '@/hooks/useScrollToTop'

const cx = classNames.bind(styles)
const Contact = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <div className={cx('main')}>
          <h5>How can help you ?</h5>
          <h3>Let us know how we can help you</h3>
          <div className={cx('desc')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
        </div>
        <div className={cx('list')}>
          <ul>
            <li>
              <div className={cx('title')}>
                01. Visit Feedback
              </div>
              <div className={cx('desc')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique rerum sunt ipsam corporis nulla veniam cum. Maiores dolor corporis molestias perspiciatis minima. Similique odit nisi est nobis praesentium fugit.
              </div>
            </li>
            <li>
              <div className={cx('title')}>
                02. Employer Services
              </div>
              <div className={cx('desc')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique rerum sunt ipsam corporis nulla veniam cum. Maiores dolor corporis molestias perspiciatis minima. Similique odit nisi est nobis praesentium fugit.
              </div>
            </li>
            <li>
              <div className={cx('title')}>
                03. Billing Inquiries
              </div>
              <div className={cx('desc')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique rerum sunt ipsam corporis nulla veniam cum. Maiores dolor corporis molestias perspiciatis minima. Similique odit nisi est nobis praesentium fugit.
              </div>
            </li>
            <li>
              <div className={cx('title')}>
                04. General Inquiries
              </div>
              <div className={cx('desc')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique rerum sunt ipsam corporis nulla veniam cum. Maiores dolor corporis molestias perspiciatis minima. Similique odit nisi est nobis praesentium fugit.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('map')} id='map'>
        <Map />
      </div>
      <div className={cx('footer')}>
        <div className={cx('item')}>
          <h4>Office</h4>
          <span className={cx('desc')}>
            <span className={cx('address')}>
              Hoa Khanh Nam ward, Lien Chieu district, Da Nang City
            </span>
            <div className={cx('info')}>
              Phone: (+84) - 090 -3526144
            </div>
            <div className={cx('info')}>
              Email:khanh@gmail.com
            </div>
          </span>
          <div className={cx('btn')}>
            <Button primary leftIcon={<IoLocationOutline />} href={'#map'}>View map</Button>
          </div>
        </div>
        <div className={cx('item')}>
          <h4>Studio</h4>
          <span className={cx('desc')}>
            <span className={cx('address')}>
              Hoa Khanh Nam ward, Lien Chieu district, Da Nang City
            </span>
            <div className={cx('info')}>
              Phone: (+84) - 090 -3526144
            </div>
            <div className={cx('info')}>
              Email:khanh@gmail.com
            </div>
          </span>
          <div className={cx('btn')}>
            <Button primary leftIcon={<IoLocationOutline />} href={'#map'}>View map</Button>
          </div>
        </div>
        <div className={cx('item')}>
          <h4>Shop</h4>
          <div className={cx('desc')}>
            <span className={cx('address')}>
              Hoa Khanh Nam ward, Lien Chieu district, Da Nang City
            </span>
            <div className={cx('info')}>
              Phone: (+84) - 090 -3526144
            </div>
            <div className={cx('info')}>
              Email:khanh@gmail.com
            </div>
          </div>
          <div className={cx('btn')}>
            <Button primary leftIcon={<IoLocationOutline />} href={'#map'}>View map</Button>
          </div>
        </div>
      </div>
      <div className={cx('more-info')}>
        <div className={cx('left')}>
          <div className={cx('info-form')}>
            <h4>Contact form</h4>
            <h3>Drop Us a Line</h3>
            <span>Your email address will not be published. Required fields are marked *</span>

          </div>
          <form action="">
            <div className={cx('input')}>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Your Email' />
              <input type="text" placeholder='Your Phone' />
              <input type="text" placeholder='Subject' />
            </div>
            <textarea name="message" rows={5} id="" placeholder='Message'></textarea>
            <button className={cx('btn')} type='submit'>Send message</button>

          </form>
        </div>
        <div className={cx('right')}>
          <img src="/contact-2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact