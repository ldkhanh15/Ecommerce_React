import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '../Button'
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import ModalProduct from '../ModalProduct/ModalProduct';
import { Link } from 'react-router-dom';
import { addCart, getCart } from '@/services/cartService';

const cx = classNames.bind(styles)
const Product = ({ data, className }) => {
    const [open, setOpen] = useState(false);
    const handleAdd = async (id) => {
        let res = await addCart({
            idProduct: `${id}`,
            quantity: 1
        })
    }
    return (
        <div className={cx('container', { [className]: className, })}>
            <div className={cx('top')}>
                <div className={cx('image-product')}>
                    <img src={data.mainImage} alt="" className={cx('image1')} />
                    <img src={data.hoverImage} alt="" className={cx('image2')} />
                </div>
                <div className={cx('info')}>
                    {
                        data.sold > 1000 ?
                            <div className={cx('tooltip', 'hot')}>
                                Hot
                            </div> : ''
                    }
                    {data.sale > 0 ?
                        <div className={cx('tooltip', 'sale')}>
                            Sale
                        </div> : ''
                    }
                    {data.sale > 0 ?
                        <div className={cx('tooltip', 'discount')}>
                            {data.sale}%
                        </div> : ''
                    }

                    <div className={cx('tooltip', 'new')}>
                        New
                    </div>

                </div>
                <div className={cx('action')}>
                    <div onClick={() => setOpen(true)} aria-label='Quick view' className={cx('box')}>
                        <MdOutlineRemoveRedEye className={cx('icon')} />
                    </div>
                    <a href='/' aria-label='Add to WishList' className={cx('box')}>
                        <FaRegHeart className={cx('icon')} />
                    </a>
                    <a href='/' aria-label='Compare' className={cx('box')}>
                        <FaRandom className={cx('icon')} />
                    </a>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('cate')}>
                    {data.brand}
                </div>
                <Link to={`/products/${data.id}`} className={cx('name')}>
                    {data.name}
                </Link>
                <div className={cx('rating')}>
                    <div className={cx('star')} style={{ width: `${4 * 100 / 5}%` }}>

                    </div>
                </div>
                <div className={cx('author')}>
                    By <span>{data?.shop?.username}</span>
                </div>
                {
                    data.total ?
                        <div className={cx('sale')}>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>
                                    {/* ${Math.round(data.price * (100 - data.sale)) / 100} */}
                                    {data.newPrice}
                                </span>
                                <span className={cx('old-price')}>
                                    {/* {data.price} */}
                                    {data.oldPrice}
                                </span>
                            </div>
                            <div className={cx('sold')}>
                                <div className={cx('total')}>
                                    <div className={cx('remain')} style={{ width: `${(data.remain / data.total) * 100}%` }}>

                                    </div>
                                </div>
                                <div className={cx('text')}>Sold: {data.remain}/{data.total}</div>
                            </div>
                            <Button onClick={() => alert(data.remain)} className={data.total > data.remain ? '' : cx('disabled')} primary large leftIcon={<CiShoppingCart />}>Add to Cart</Button>

                        </div>
                        :
                        <div className={cx('info')}>
                            <span className={cx('new-price')}>
                                ${Math.round(data.price * (100 - data.sale)) / 100}
                            </span>
                            <span className={cx('old-price')}>
                                {data.price}
                            </span>
                            <Button onClick={() => handleAdd(data.id)} rightIcon={<CiShoppingCart />} outline small>Add</Button>
                        </div>
                }
            </div>
            <ModalProduct open={open} setOpen={setOpen} modal={true} />
        </div>
    )
}

export default Product