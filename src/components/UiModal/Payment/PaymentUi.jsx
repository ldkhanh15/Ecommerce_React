import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import { addPayment } from '@/redux/action'
import { connect } from 'react-redux'
const cx = classNames.bind(styles)
const PaymentUi = ({ setOpen, data, addPayment, payment }) => {
    const [check, setCheck] = useState(payment || { id: 1 })
    const handleAdd = () => {
        addPayment(check)
        setOpen(false)
    }
    return (
        <div className={cx('container')}>
            <h3>
                Choose a payment method
            </h3>
            <div className={cx('list-payment')}>
                {
                    data.map((value, index) => (
                        <div onClick={() => setCheck(value)} key={index} className={check.id === value.id ? cx(['box', 'active']) : cx('box')}>
                            <input defaultChecked={value.id === check.id} id={`payment-${index}`} type="radio" name='method' />
                            <label htmlFor={`payment-${index}`}>{value.name}</label>
                        </div>
                    ))
                }
            </div>
            <div className={cx('btn')}>
                <Button onClick={() => handleAdd()} large primary>Confirm</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    payment: state.payment
})
const mapDispatchToProps = {
    addPayment
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentUi)