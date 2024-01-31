import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Voucher from '@/components/Voucher/Voucher'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const UiVoucher = ({ data }) => {
    return (
        <div className={cx('container')}>
            <h3>
                Choose or enter voucher code
            </h3>
            <div className={cx('input')}>
                <input type="" placeholder='Enter voucher code...'/>
                <Button small outline>Choose</Button>
            </div>
            <div className={cx('list-voucher')}>
                {
                    data && data.map((item,index)=>(
                        <Voucher data={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default UiVoucher