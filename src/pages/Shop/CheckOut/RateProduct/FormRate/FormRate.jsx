import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles.module.scss'
import classNames from 'classnames/bind'
import Button from '@/components/Button'
import { postComment } from '@/services/productService'
import { toast } from 'react-toastify'
import { FaStar } from "react-icons/fa6";
import StarRatings from 'react-star-ratings'
const cx = classNames.bind(styles)
const FormRate = ({ product, bill }) => {
    const [comment, setComment] = useState('')
    const [star,setStar]=useState(0)
    let avgStar = 0
    if (product.review.length) {
        avgStar = product.review.reduce((acc, cur) => {
            return acc + cur.star
        }, 0)
        avgStar /= product.review.length
    }
    const handleComment = async () => {
        let res = await postComment({
            idBuyer: bill.idBuyer,
            idBill: `${bill.id}`,
            idProduct: `${product.id}`,
            comment: comment,
            star: `${star}`,
            idParent: '0'
        })
        if (res.code) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }
    }
    return (
        <div>
            <div className={cx('product')}>
                <div className={cx('left')}>
                    <img src={product.mainImage} alt="" />
                </div>
                <div className={cx('right')}>
                    <Link to={`/products/${product.id}`} className={cx('name')}>
                        {product.name}
                    </Link >
                    <div className={cx('rating')}>
                        <div style={{ width: `${avgStar / 5 * 100}%` }} className={cx('star')}></div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('price')}>
                            ${Math.floor(product.price * (100 - product.sale)) / 100}
                        </div>
                        <div className={cx('quantity')}>
                            x{product.BillProduct.quantity}
                        </div>
                    </div>
                    <div className={cx('type')}>
                        <div className={cx('title')}>
                            Type:
                        </div>
                        <div className={cx('value')}>
                            {product.BillProduct.type}
                        </div>
                    </div>

                </div>
            </div>
            <div className={cx('comment')}>
                <StarRatings
                    rating={star}
                    starRatedColor="orange"
                    changeRating={(star)=>setStar(star)}
                    numberOfStars={5}
                    name='rating'
                    starHoverColor='orange'
                    starEmptyColor='#ddd'
                    starDimension='4rem'
                />
                <div className={cx('content')}>
                    <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder='Write a review...' />
                    <div className={cx('btn')}>
                        <Button onClick={() => handleComment()} primary large>Post</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRate