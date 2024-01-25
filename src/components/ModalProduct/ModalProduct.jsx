import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../Button';
import { FaRandom, FaRegHeart } from 'react-icons/fa';

Modal.setAppElement('#root');
const cx = classNames.bind(styles)
const ModalProduct = ({ open, setOpen }) => {

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className={cx('container')}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 99999999,
        },
        content: {
          zIndex: 9999999,
        },
      }}
    >
      <div className={cx('main')}>
        <div onClick={() => setOpen(false)} className={cx('icon-close')}>
          <LiaTimesSolid />
        </div>
        <div className={cx('content')}>
          <div className={cx('left')}>

          </div>
          <div className={cx('right')}>
            <div className={cx('sale-off')}>
              Sale off
            </div>
            <div className={cx('name')}>
              Seeds of Change Organic Quinoa, Brown
            </div>
            <div className={cx('review')}>
              <div className={cx('rating')}>
                <div style={{ width: '78%' }} className={cx('star')}>

                </div>
              </div>
              <div className={cx('count')}>
                (32 reviews)
              </div>
            </div>
            <div className={cx('price')}>
              <div className={cx('new-price')}>
                $238.25
              </div>
              <div className={cx('old-price')}>
                <div className={cx('sale')}>
                  14% Off
                </div>
                <div className={cx('old')}>
                  $245.5
                </div>
              </div>
            </div>
            <div className={cx('color')}>
              <h3 className={cx('title')}>Color</h3>

              <div className={cx('item-color')}>

              </div>
              <div className={cx('item-color')}>

              </div>
              <div className={cx('item-color')}>

              </div>
              <div className={cx('item-color')}>

              </div>
              <div className={cx('item-color')}>

              </div>
              <div className={cx('item-color')}>

              </div>
            </div>
            <div className={cx('box')}>
              <h3 className={cx('title')}>Size</h3>

              <div className={cx(['item-box','active'])}>
                M
              </div>
              <div className={cx('item-box')}>
                L
              </div>
              <div className={cx('item-box')}>
                XL
              </div>
              <div className={cx('item-box')}>
                XXL
              </div>
            </div>
            <div className={cx('box')}>
              <h3 className={cx('title')}>Combo</h3>

              <div className={cx(['item-box','active'])}>
                Combo x2
              </div>
              <div className={cx('item-box')}>
                Combo x1.5
              </div>
              <div className={cx('item-box')}>
                Combo nguyên con
              </div>
            </div>
            <div className={cx('action')}>
              <input defaultValue={1} min={1} type="number" />
              <Button rounded className={cx('btn')}>Add to Cart</Button>
              <div className={cx('icon')}>
                <FaRegHeart />
              </div>
              <div className={cx('icon')}>
                <FaRandom />
              </div>
            </div>
            <div className={cx('more')}>
              <div className={cx('item')}>
                SKU: <span>FWM15</span>
              </div>
              <div className={cx('item')}>
                Tag: <span>Cloth</span>
              </div>
              <div className={cx('item')}>
                Available: <span>0 items in Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProduct