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
import { addCart,addCompare,addWhiteList } from '@/redux/action';
import { connect } from 'react-redux';

const cx = classNames.bind(styles)
const Product = ({ data, className ,addCart ,addCompare,addWhiteList}) => {
    const [open, setOpen] = useState(false);
    const handleAdd = (data) => {
        addCart({
            ...data,
            quantity:1
        });
    }
    let star = 0;
    if (data.review.length > 0) {
        star = data.review.reduce((acc, cur) => {
            return acc + cur.star
        }, 0)
        star = star / data.review.length;
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
                    <div onClick={()=>addWhiteList(data)} aria-label='Add to WishList' className={cx('box')}>
                        <FaRegHeart className={cx('icon')} />
                    </div>
                    <a onClick={()=>addCompare(data)} aria-label='Compare' className={cx('box')}>
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
                <div className={cx('review')}>
                    <div className={cx('rating')}>
                        <div className={cx('star')} style={{ width: `${star * 100 / 5}%` }}>

                        </div>
                    </div>
                    <span>({data.review.length})</span>
                </div>

                <div className={cx('author')}>
                    By <span>{data?.shop?.username}</span>
                </div>
                {
                    data.quantity ?
                        <div className={cx('sale')}>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>
                                    ${Math.round(data.price * (100 - data.sale)) / 100}
                                </span>
                                <span className={cx('old-price')}>
                                    {data.price}
                                </span>
                            </div>
                            <div className={cx('sold')}>
                                <div className={cx('total')}>
                                    <div className={cx('remain')} style={{ width: `${(data.sold / data.quantity) * 100}%` }}>

                                    </div>
                                </div>
                                <div className={cx('text')}>Sold: {data.sold}/{data.quantity}</div>
                            </div>
                            <Button className={data.quantity > data.sold ? '' : cx('disabled')} primary large leftIcon={<CiShoppingCart />}>Add to Cart</Button>

                        </div>
                        :
                        <div className={cx('info')}>
                            <span className={cx('new-price')}>
                                ${Math.round(data.price * (100 - data.sale)) / 100}
                            </span>
                            <span className={cx('old-price')}>
                                {data.price}
                            </span>
                            <Button onClick={() => handleAdd(data)} rightIcon={<CiShoppingCart />} outline small>Add</Button>
                        </div>
                }
            </div>
            <ModalProduct open={open} setOpen={setOpen} modal={true} />
        </div>
    )
}

const mapStateToProps = (state) => ({
   
  });
  
  const mapDispatchToProps = {
    addCart,
    addWhiteList,
    addCompare
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);