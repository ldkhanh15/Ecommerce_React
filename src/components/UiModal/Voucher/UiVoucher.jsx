import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Voucher from '@/components/Voucher/Voucher'
import Button from '@/components/Button'
import { connect } from 'react-redux'
import { addVoucher, removeVoucher, addVoucherProduct } from '@/redux/action'
const cx = classNames.bind(styles)
const UiVoucher = ({ id, shop, data, addVoucher, voucher, addVoucherProduct, products }) => {
    const nest = {
        name: 'Nested',
        avatar: '/images/logo/logo.svg'
    }
    const handleAdd = (data) => {
        if (shop) {
            addVoucherProduct(data, id)
        } else {
            addVoucher(data)
        }
    }
    return (
        <div className={cx('container')}>
            <h3>
                Choose or enter voucher code
            </h3>
            <div className={cx('input')}>
                <input type="" placeholder='Enter voucher code...' />
                <Button small outline>Choose</Button>
            </div>
            <div className={cx('list-voucher')}>
                {
                    data && data.map((item, index) => {
                        let product = products.filter(p => p.id === id)
                        if (item.remain === 0) {
                            return null;
                        }
                        return (
                            <div className={voucher.id === item.id || product[0]?.voucher?.id === item.id ? cx('active') : ''} onClick={() => handleAdd(item)} key={index}><Voucher data={item} shop={shop || nest} /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    voucher: state.voucher,
    products: state.products
})
const mapDispatchToProps = {
    addVoucher,
    removeVoucher,
    addVoucherProduct,

}
export default connect(mapStateToProps, mapDispatchToProps)(UiVoucher)