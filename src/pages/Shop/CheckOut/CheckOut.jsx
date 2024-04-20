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
import { Link, useNavigate } from 'react-router-dom'
import ModalVoucher from '@/components/ModalVoucher/ModalVoucher'
import { connect } from 'react-redux';
import { getAddress } from '@/services/userService'
import { toast } from 'react-toastify'
import { getPayment } from '@/services/paymentService'
import { getVoucherOfAll } from '@/services/voucherService'
import { getDeliver } from '@/services/deliverService'
import { createBill } from '@/services/billService'
import { removeDeliver, removePayment, removeVoucher, clearProduct } from '@/redux/action'
const cx = classNames.bind(styles)

const CheckOut = ({ products, user, deliver, payment, voucher, removeDeliver, removePayment, clearProduct, removeVoucher }) => {
  const [info, setInfo] = useState({})
  const [data, setData] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      let resAddress = await getAddress();
      let resPayment = await getPayment();
      let resVoucher = await getVoucherOfAll();
      let resDelivery = await getDeliver();
      setInfo({
        address: resAddress.data,
        payment: resPayment.data,
        voucher: resVoucher.data,
        deliver: resDelivery.data
      })
      setData({
        address: resAddress?.data[0]?.id,
      })
    }
    getData();
  }, [])
  useScrollToTop();
  const [openVoucher, setOpenVoucher] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const [openDeliver, setOpenDeliver] = useState(false)
  let totalPrice = products.reduce((acc, cur) => {
    let price = cur.price * Number(cur.quantity) * (100 - cur.sale) / 100;
    if (cur.voucher) {
      if (cur.voucher.salePT) {
        price = price * (100 - cur.voucher.salePT) / 100
      } else if (cur.voucher.salePrice) {
        price = price - cur.voucher.salePrice > 0 ? price - cur.voucher.salePrice : 0
      }
    }
    return acc + price;
  }, 0)
  const handleCheckOut = async () => {
    let res = await createBill({
      idBuyer: `${user.id}`,
      idAddress: `${data.address}`,
      idDeliver: `${deliver.id}`,
      idPayment: `${payment.id}`,
      products: [...products],
      idVoucher: `${voucher.id}`,

    })
    if (res.code) {
      toast.success(res.message, {
        position: "bottom-center"
      })
      removeDeliver();
      removePayment();
      removeVoucher();
      clearProduct();
      navigate('/thank-you')
    } else {
      toast.error(res.message, {
        position: "bottom-center"
      })
    }
  }
  const handleChange = (e) => {
    setData({
      ...data,
      address: e.target.value
    })
  }
  let checkVP = voucher && voucher.salePrice && !voucher.salePT ? true : false
  let checkVS = voucher && voucher.salePT && !voucher.salePrice ? true : false
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Check Out</title>
      </Helmet>
      <div className={cx('main')}>
        <div className={cx('address')}>
          <select onChange={(e) => handleChange(e)} name="" id="">
            {
              info.address?.map((item, index) => (
                <option defaultChecked={data.address === item.id} key={index} value={item.id}>{item.address}</option>
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
              <div className={cx('text')}>
                {
                  checkVP && <div className={cx('sale')}>-{voucher.salePrice}$</div>
                }
                {
                  checkVS && <div className={cx('sale')}>Sale off {voucher.salePT}</div>
                }
                {
                  !checkVS && !checkVP && 'No voucher available'
                }
              </div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
          <div onClick={() => setOpenPayment(true)} className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>
                Payment method
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>
                {
                  payment.name ? <div className={cx('payment')}>{payment.name}</div> : 'Choose a payment method'
                }
              </div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
          <div onClick={() => setOpenDeliver(true)} className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>Deliver method</div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>
                {
                  deliver.name ? <div className={cx('payment')}>{deliver.name}</div> : 'Choose a delivery method'
                }
              </div>
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
                ${totalPrice.toFixed(2)}
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
            <div className={cx('total')}>
              <div className={cx('left')}>
                Total:
              </div>
              <div className={cx('right')}>
                ${(totalPrice + 5).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div className={cx('submit')}>
          <div className={cx('privacy')}>
            By clicking "Place Order", you are agreeing to <Link to={'/privacy-policy'}>Nest's Privacy Policy</Link>
          </div>
          <div className={cx('btn')}>
            <Button onClick={() => handleCheckOut()} primary large>Place Order</Button>
          </div>
        </div>
        <ModalVoucher data={info.voucher} open={openVoucher} setOpen={setOpenVoucher} voucher={true} />
        <ModalVoucher data={info.payment} open={openPayment} setOpen={setOpenPayment} payment={true} />
        <ModalVoucher data={info.deliver} open={openDeliver} setOpen={setOpenDeliver} deliver={true} />
      </div>

    </div >
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
  deliver: state.deliver,
  payment: state.payment,
  voucher: state.voucher
});

const mapDispatchToProps = {
  removeDeliver,
  removePayment,
  removeVoucher,
  clearProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);