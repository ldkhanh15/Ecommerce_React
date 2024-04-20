import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import { getDetailBill, getProductCommentOfBill } from '@/services/billService'
import FormRate from './FormRate/FormRate'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const RateProduct = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [data, setData] = useState({});
    const [active, setActive] = useState(-1);
    useEffect(() => {
        const getData = async () => {
            let res = await getProductCommentOfBill(id);
            setData(res.data)
        }
        getData();
    }, [])
    return (
        <div className={cx('container')}>
            {
                data?.product?.length ===0 && <div className={cx('no-product')}>
                    <div className={cx('content')}>You reviewed all product in this bill !</div>
                    <div className={cx('btn')}><Button to={'/'} large primary>Back To Home</Button></div>
                </div>
            }
            {
                data?.product?.map((product, index) => {
                    return (
                        <div onClick={() => setActive(index)} key={index} className={index === active ? cx(['review', 'active']) : cx('review')}>
                            <FormRate product={product} bill={data} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RateProduct