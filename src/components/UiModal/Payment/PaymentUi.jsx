import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const PaymentUi = ({ data }) => {
    const [check, setCheck] = useState(0)
    return (
        <div className={cx('container')}>
            <h3>
                Choose a payment method
            </h3>
            <div className={cx('list-payment')}>
                {
                    data.map((item, index) => (
                        <div onClick={() => setCheck(index)} key={index} className={index === check ? cx(['box', 'active']) : cx('box')}>
                            <input defaultChecked={index === 0} id={`payment-${index}`} type="radio" name='method' />
                            <label htmlFor={`payment-${index}`}>{item.title}</label>
                        </div>
                    ))
                }
            </div>
            <div className={cx('btn')}>
                <Button large primary>Confirm</Button>
            </div>
        </div>
    )
}

export default PaymentUi