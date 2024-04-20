import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link, useParams } from 'react-router-dom'
import { getDetailBill, updateBill } from '@/services/billService'
import { CgNotes } from 'react-icons/cg'
import Button from '@/components/Button'
import UiInfo from './UiInfo/UiInfo'
import { toast } from 'react-toastify'
const cx = classNames.bind(styles)
const OrderDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [dataChildren, setDataChildren] = useState({})
    let price = 0;
    useEffect(() => {
        const getData = async () => {
            let res = await getDetailBill(id);
            let products = [];
            res.data.product.map((item) => {
                products.push({
                    id: item.id,
                    mainImage: item.mainImage,
                    name: item.name,
                    price: item.price,
                    review: item.review,
                    quantity: item.BillProduct.quantity,
                    type: item.BillProduct.type
                })
            })
            setData({
                ...res.data,
                product: products
            });
        }
        getData();
    }, [])

    const handleChange = (e, index) => {
        let arr = [...data.product]
        arr[index].quantity = e.target.value;
        setData({
            ...data,
            product: arr
        })
    }
    const handleOpen = () => {
        setDataChildren({
            id: data.id,
            status: data.idStatus,
            payment: data.payment.name,
            deliver: data.deliver.name,
            address: data.address.address,
        })
        setOpen(true);
    }
    const handleUpdate = async () => {
        let product = [];
        data.product.map((item) => {
            product.push({
                id: item.id,
                quantity: item.quantity
            })
        })
        let res = await updateBill({
            id: `${data.id}`,
            totalPrice: price,
            products: product
        })
        res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    }
    return (
        <div className={cx('container')}>
            <h1>Order Detail</h1>
            {
                data && data.shop && <>
                    <div className={cx('info')}>
                        <h3>Vendor Information</h3>
                        <div className={cx('main')}>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    <img src={data.shop.avatar} />
                                </div>
                                <div className={cx('right')}>
                                    {data.shop.name}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Phone:
                                </div>
                                <div className={cx('right')}>
                                    {data.shop.phone}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Address:
                                </div>
                                <div className={cx('right')}>
                                    {data.shop.address}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={cx('info')}>
                        <h3>Customer Information</h3>
                        <div className={cx('main')}>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    <img src={data.user.avatar} />
                                </div>
                                <div className={cx('right')}>
                                    {data.user.name}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Phone:
                                </div>
                                <div className={cx('right')}>
                                    {data.user.phone}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('header')}>
                            <h3>Order Information</h3>
                            <button onClick={() => handleOpen()}>Update</button>
                        </div>
                        <div className={cx('main')}>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    SKU:
                                </div>
                                <div className={cx('right')}>
                                    {data.id}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Status:
                                </div>
                                <div className={cx('right')}>
                                    {data.status.status}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Payment method:
                                </div>
                                <div className={cx('right')}>
                                    {data.payment.name}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Deliver method:
                                </div>
                                <div className={cx('right')}>
                                    {data.deliver.name}
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('left')}>
                                    Address receive:
                                </div>
                                <div className={cx('right')}>
                                    {data.address.address}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('products')}>
                        <h3>Products</h3>
                        <div className={cx('main')}>
                            {
                                data.product.map((item, index) => {
                                    let star = item.review.map((cur, acc) => {
                                        return cur + acc.star;
                                    }, 0);
                                    if (item.review.length > 0) {
                                        star /= item.review.length;
                                    }
                                    price += item.price * item.quantity;
                                    return (
                                        <div className={cx('item')} key={index}>
                                            <div className={cx('shop-info')}>
                                                <div className={cx('name')}>
                                                    {data.shop.name}
                                                </div>
                                                <Link to={`/shop/vendors/${data.shop.id}`}>View shop</Link>
                                            </div>
                                            <div className={cx('product')}>
                                                <div className={cx('left')}>
                                                    <img src={item.mainImage} />
                                                </div>

                                                <div className={cx('right')}>
                                                    <div className={cx('name')}>
                                                        {item.name}
                                                    </div>
                                                    <div className={cx('rating')}>
                                                        <div style={{ width: `${star / 5 * 100}%` }} className={cx('rating-star')}>

                                                        </div>
                                                    </div>
                                                    <div className={cx('type')}>
                                                        <div className={cx('title')}>
                                                            Type:
                                                        </div>
                                                        <div className={cx('value')}>
                                                            {item.type}
                                                        </div>
                                                    </div>
                                                    <div className={cx('quantity')}>
                                                        <div className={cx('price')}>
                                                            <div className={cx('title')}>
                                                                Price:
                                                            </div>
                                                            <div className={cx('value')}>
                                                                {item.price}$
                                                            </div>
                                                        </div>
                                                        <div className={cx('number')}>
                                                            <input min={1} onChange={(e) => handleChange(e, index)} type="number" value={item.quantity} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
                                        ${price}
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('left')}>
                                        Shipping Subtotal:
                                    </div>
                                    <div className={cx('right')}>
                                        ${data.deliver.price}
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('left')}>
                                        Shipping Discount
                                    </div>
                                    <div className={cx('right')}>
                                        ${data.discountPrice}
                                    </div>
                                </div>
                                <div className={cx('total')}>
                                    <div className={cx('left')}>
                                        Total:
                                    </div>
                                    <div className={cx('right')}>
                                        ${price - data.discountPrice + Number(data.deliver.price)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn')}>
                        <div className={cx('item')}>
                            <Button onClick={() => handleUpdate()} primary large>Update</Button>
                        </div>
                    </div>
                </>
            }
            <UiInfo open={open} setOpen={setOpen} dataChildren={dataChildren} />
        </div>
    )
}

export default OrderDetail