import useScrollToTop from '@/hooks/useScrollToTop'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import ShopProduct from '@/components/CheckOut/ShopProduct/ShopProduct'
import { TbBasketDiscount } from "react-icons/tb";
import { IoIosArrowForward } from 'react-icons/io'
import { CgNotes } from "react-icons/cg";
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import ModalVoucher from '@/components/ModalVoucher/ModalVoucher'
import { voucher, payment } from './data'
import { connect } from 'react-redux';
import { getAddress } from '@/services/userService'
const cx = classNames.bind(styles)

const CheckOut = ({ products }) => {
  const [address, setAddress] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getAddress();
      setAddress(res.data)
    }
    getData();
  }, [])

  useScrollToTop();
  const [openVoucher, setOpenVoucher] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  let total = 0;
  if (products) {
    total = products.reduce((acc, cur) => {
      return acc + cur.quantity * Math.floor(cur.price * (100 - cur.sale)) / 100
    }, 0)
  }
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Check Out</title>
      </Helmet>
      <div className={cx('main')}>
        <div className={cx('address')}>
          <select name="" id="">
            {
              address?.map((item,index)=>(
                <option key={index} value={item.id}>{item.address}</option>
              ))
            }
          </select>
        </div>
        <div className={cx('shop-product')}>
          {
            products.map((product, index) => (
              <ShopProduct key={index} product={product} />
            ))
          }
        </div>
        <div className={cx('footer')}>
          <div onClick={() => setOpenVoucher(true)} className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>Nest Voucher</div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>Select Voucher</div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
          <div onClick={() => setOpenPayment(true)} className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>Payment method</div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>Select Payment method</div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
        </div>
        <div className={cx('detail-checkout')}>
          <div className={cx('header')}>
            <CgNotes className={cx('icon')} />
            <div className={cx('text')}>
              Checkout Details
            </div>
          </div>
          <div className={cx('content')}>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Merchandise Subtotal:
              </div>
              <div className={cx('right')}>
                ${total}
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Shipping Subtotal:
              </div>
              <div className={cx('right')}>
                $5
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Shipping Discount
              </div>
              <div className={cx('right')}>
                $4
              </div>
            </div>
            <div className={cx('total')}>
              <div className={cx('left')}>
                Total:
              </div>
              <div className={cx('right')}>
                $340.25
              </div>
            </div>
          </div>
        </div>
        <div className={cx('submit')}>
          <div className={cx('privacy')}>
            By clicking "Place Order", you are agreeing to <Link to={'/privacy-policy'}>Nest's Privacy Policy</Link>
          </div>
          <div className={cx('btn')}>
            <Button primary large>Place Order</Button>
          </div>
        </div>
        <ModalVoucher data={voucher} open={openVoucher} setOpen={setOpenVoucher} voucher={true} />
        <ModalVoucher data={payment} open={openPayment} setOpen={setOpenPayment} payment={true} />
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);