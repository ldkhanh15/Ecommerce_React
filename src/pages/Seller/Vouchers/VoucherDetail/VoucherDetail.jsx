import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteVoucher, getVoucherDetails } from '@/services/voucherService'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const VoucherDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let res = await getVoucherDetails(id);
            setData(res.data)
        }
        getData()
    }, [])
    console.log(data);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeTime = (e) => {
        alert(e.target.value)
    }
    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this voucher?')) {
            let res = await deleteVoucher(id)
            console.log(res);
        }
    }
    return (
        <div className={cx('container')}>
            {
                data && <>
                    <h1>Voucher Detail</h1>
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
                            <input onChange={(e) => handleChangeTime(e)} type="date" id='dataStart' value={data.start?.split('T')[0]} />
                            <input onChange={(e) => handleChangeTime(e)} type="time" value={data.start?.split('T')[1].slice(0, -1)} />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="dataEnd">Date End</label>
                            <input onChange={(e) => handleChangeTime(e)} type="date" id='dataEnd' value={data.end?.split('T')[0]} />
                            <input onChange={(e) => handleChangeTime(e)} type="time" value={data.end?.split('T')[1].slice(0, -1)} />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="quantity">Quantity voucher</label>
                            <input onChange={(e) => handleChange(e)} name='quantity' type="number" id='quantity' value={data.quantity} />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="minBill">Min Bill</label>
                            <input onChange={(e) => handleChange(e)} name='minBill' type="number" id='minBill' value={data.minBill} />
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
                                <Button primary large>Update</Button>
                            </div>
                            <div className={cx('item')}>
                                <button onClick={() => handleDelete(data.id)} className={cx('del')}>
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>

                </>
            }
        </div>
    )
}

export default VoucherDetail