import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiHeart } from 'react-icons/bi'

const cx = classNames.bind(styles)
const BlogLayout = ({ data }) => {
    return (
        <div className={cx('container')}>
            {data &&
                <>
                    <div className={cx('header')}>
                        <img src={data.image} alt="" />
                        <div className={cx('icon')}>
                            <BiHeart />
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('author')}>
                            {data.author}
                        </div>
                        <div className={cx('name')}>
                            {data.name}
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('item')}>
                                {data.date}
                            </div>
                            <div className={cx('item')}>
                                {data.view} Views
                            </div>
                            <div className={cx('item')}>
                                {data.time} read
                            </div>
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default BlogLayout