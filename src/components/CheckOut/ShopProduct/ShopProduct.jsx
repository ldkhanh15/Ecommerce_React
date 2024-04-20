import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSolidDiscount } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ModalVoucher from '@/components/ModalVoucher/ModalVoucher'
import {  getVoucherOfShopOnly } from '@/services/voucherService'
import { connect } from 'react-redux'
const cx = classNames.bind(styles)
const ShopProduct = ({ order, product, products }) => {
  const [voucher, setVoucher] = useState([]);
  useEffect(() => {
    const getVoucher = async () => {
      let res = await getVoucherOfShopOnly(product.shop.id)
      setVoucher(res.data)
    }
    if (product.shop.id) {
      getVoucher();
    }
  }, [product.shop.id])

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (!order) {
      setOpen(true)
    }
  }
  let total = product.quantity * Math.floor(product.price * (100 - product.sale)) / 100;
  if (product.BillProduct && product.BillProduct.discount) {
    total = total - product.BillProduct.discount > 0 ? total - product.BillProduct.discount : 0
  }
  return (
    <div className={cx('container')}>
      <ModalVoucher id={product.id} data={voucher?.voucher} shop={voucher} open={open} setOpen={setOpen} voucher={true} />
      <div className={cx('shop')}>
        <div className={cx('name-shop')}>
          {product.shop.name}
        </div>
        <Link to={`/shop/vendors/${product.shop.id}`}>View Shop</Link>
      </div>
      <div className={cx('product')}>
        <div className={cx('left')}>
          <img src={product.mainImage} alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx('name')}>
            {product.name}
          </div>
          <div className={cx('type')}>
            Type: {product.type}
          </div>
          <div className={cx('price-quantity')}>
            <div className={cx('price')}>
              ${Math.floor(product.price * (100 - product.sale)) / 100}
            </div>
            <div className={cx('quantity')}>
              x{product.quantity}
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={cx('voucher')}>
        <div className={cx('left')}>
          <div className={cx('icon')}>
            <BiSolidDiscount />
          </div>
          <div className={cx('text')}>
            Shop Voucher
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('text')}>
            {
              products.map((p) => {
                if (p.id === product.id) {
                  if (p.voucher) {
                    if (p.voucher.salePrice) {
                      return <div className={cx('sale')}>-{p.voucher.salePrice}$</div>
                    } else if (p.voucher.salePT) {
                      return <div className={cx('sale')}>Sale off {p.voucher.salePT}%</div>
                    }
                  } else {
                    return <div>Select a voucher</div>
                  }
                }
              })
            }
            {
              product.BillProduct && product.BillProduct.discount && <div className={cx('sale')}>
                {product.BillProduct.discount}$
              </div>
            }
          </div>
          <div className={cx('icon')}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className={cx('total')}>
        <div className={cx('text')}>
          Total:
        </div>
        <div className={cx('price')}>
          {total}$
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ShopProduct)