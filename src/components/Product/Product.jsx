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

const cx = classNames.bind(styles)
const Product = ({ data, className }) => {
    const [open,setOpen]=useState(false)
    return (
        <div className={cx('container', { [className]: className, })}>
            <div className={cx('top')}>
                <div className={cx('image-product')}>
                    <img src={data.image[0].link} alt="" className={cx('image1')} />
                    <img src={data.image[1].link} alt="" className={cx('image2')} />
                </div>
                <div className={cx('info')}>
                    {data.hot &&
                        <div className={cx('tooltip', 'hot')}>
                            Hot
                        </div>
                    }
                    {data.sale &&
                        <div className={cx('tooltip', 'sale')}>
                            Sale
                        </div>
                    }
                    {data.discount &&
                        <div className={cx('tooltip', 'discount')}>
                            {data.discount}
                        </div>
                    }
                    {data.new &&
                        <div className={cx('tooltip', 'new')}>
                            New
                        </div>
                    }
                </div>
                <div className={cx('action')}>
                    <div  onClick={()=>setOpen(true)} aria-label='Quick view' className={cx('box')}>
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
                    {data.author}
                </div>
                <Link to={`/products/${data.name}`} className={cx('name')}>
                    {data.name}
                </Link>
                <div className={cx('rating')}>
                    <div className={cx('star')} style={{ width: `${data.star}` }}>

                    </div>
                </div>
                <div className={cx('author')}>
                    By <span>{data.by}</span>
                </div>
                {
                    data.total ?
                        <div className={cx('sale')}>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>
                                    ${data.newPrice}
                                </span>
                                <span className={cx('old-price')}>
                                    {data.oldPrice ? `$ ${data.oldPrice}` :''}
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
                                ${data.newPrice}
                            </span>
                            <span className={cx('old-price')}>
                            {data.oldPrice ? `$${data.oldPrice}` :''}
                            </span>
                            <Button rightIcon={<CiShoppingCart />} outline small>Add</Button>
                        </div>
                }
            </div>
            <ModalProduct open={open} setOpen={setOpen} modal={true}/>
        </div>
    )
}

export default Product