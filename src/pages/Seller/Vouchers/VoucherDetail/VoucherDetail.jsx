import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteVoucher, getVoucherDetails, updateVoucher } from '@/services/voucherService'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const VoucherDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            let res = await getVoucherDetails(id);
            let arr = res.data.shop;
            for (let i = 0; i < 5; i++) {
                console.log(arr);
                arr = arr.concat(arr);
            }
            let end = res.data.end;
            end = end?.split('T')[0] + " " + end?.split('T')[1].slice(0, -1)
            let start = res.data.start;
            start = start?.split('T')[0] + " " + start?.split('T')[1].slice(0, -1)
            setData({
                description: res.data.description,
                id: res.data.id,
                limit: res.data.limit,
                end: end,
                maVoucher: res.data.maVoucher,
                minBill: res.data.minBill,
                quantity: res.data.quantity,
                remain: res.data.remain,
                salePT: res.data.salePT,
                salePrice: res.data.salePrice,
                shop: arr || res.data.shop,
                start: start,
                type: res.data.type,

            })
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
    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this voucher?')) {
            let res = await deleteVoucher(id)
            console.log(res);
        }
    }
    const handleUpdate = async () => {
        console.log(data);
        let res = await updateVoucher({
            id: `${data.id}`,
            description: data.description,
            limit: data.limit,
            end: data.end,
            maVoucher: data.maVoucher,
            minBill: data.minBill,
            quantity: data.quantity,
            remain: data.remain,
            salePT: data.salePT,
            salePrice: data.salePrice,
            start: data.start,
            type: data.type,
        });
        console.log(res);
    }
    return (
        <div className={cx('container')}>
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
                        <div className={cx('input')}>
                            <label htmlFor="type">Type</label>
                            <select onChange={(e)=>handleChange(e)} name="type" id="type">
                                <option defaultChecked={data.type === "V1" ? true : false} value={"V1"}>Discount voucher</option>
                                <option defaultChecked={data.type === "V2" ? true : false} value={"V2"}>FreeShip voucher</option>
                            </select>
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('item')}>
                                <Button onClick={() => handleUpdate()} primary large>Update</Button>
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