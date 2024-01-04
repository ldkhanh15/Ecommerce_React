import React from 'react'
import classNames from 'classnames/bind'
import styles from './CateCard.module.scss'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Button from '../Button'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const CateCard = ({ data }) => {
    return (
        <Link to={'/product'} className={cx('container')}>
            <span className={cx('name')}>
                {data.name}
            </span>
            <div className={cx('image')}>
                <img src={data.image} alt={data.name} />
            </div>
            <div className={cx('shop')}>
                <Button className={cx('btn')} primary large>
                    <span className={cx('text')}>Shop now</span>
                    <FaLongArrowAltRight className={cx('icon')}/>
                </Button>
            </div>
        </Link>
    )
}

export default CateCard