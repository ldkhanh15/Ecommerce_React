import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import { toast } from 'react-toastify'
import { createVoucher } from '@/services/voucherService'
import Loading from '@/components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
const AddVoucher = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = async () => {
        setLoading(true)
        let res = await createVoucher({
            ...data,
            idShop: `1`
        })
        if (res.code) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }
        setLoading(false)
        navigate('/seller/vouchers')
    }
    return (
        <>
            {
                loading ? <Loading /> : <div className={cx('container')}>
                    {
                        data && <>
                            <h1>Voucher Detail</h1>
                            {
                                data.shop && <div className={cx('list-shop')}>
                                    <h3>Shop</h3>
                                    <div className={cx('shop')}>
                                        {
                                            data.shop.map((item, index) => (
                                                <Link to={`/shop/vendors/${item.id}`} key={index} className={cx('item')}>
                                                    <div className={cx('top')}>
                                                        <img src={item.avatar} alt="" />
                                                    </div>
                                                    <div className={cx('bottom')}>
                                                        <span>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                            <div className={cx('info')}>
                                <div className={cx('input')}>
                                    <label htmlFor="maVoucher">Voucher code</label>
                                    <input onChange={(e) => handleChange(e)} name='maVoucher' type="text" id='maVoucher' value={data.maVoucher} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="description">Description</label>
                                    <input onChange={(e) => handleChange(e)} name='description' type="text" id='description' value={data.description} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="dataStart">Date Start</label>
                                    <input name='start' onChange={(e) => handleChange(e)} type="datetime-local" id='dataStart' value={data.start} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="dataEnd">Date End</label>
                                    <input name='end' onChange={(e) => handleChange(e)} type="datetime-local" id='dataEnd' value={data.end} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="quantity">Quantity voucher</label>
                                    <input onChange={(e) => handleChange(e)} name='quantity' type="number" id='quantity' value={data.quantity} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="salePT">Discount (%)</label>
                                    <input onChange={(e) => handleChange(e)} name='salePT' type="number" id='salePT' value={data.salePT} />
                                </div>
                                <div className={cx('input')}>
                                    <label htmlFor="salePrice">Discount</label>
                                    <input onChange={(e) => handleChange(e)} name='salePrice' type="number" id='salePrice' value={data.salePrice} />
                                </div>
                                <div className={cx('btn')}>
                                    <div className={cx('item')}>
                                        <Button onClick={() => handleAdd()} primary large>Add Voucher</Button>
                                    </div>
                                </div>

                            </div>

                        </>
                    }
                </div>
            }
        </>
    )
}

export default AddVoucher