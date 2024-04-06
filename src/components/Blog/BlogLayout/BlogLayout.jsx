import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiHeart } from 'react-icons/bi'
import moment from 'moment'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
const BlogLayout = ({ data }) => {
    const date = moment(data.createdAt).format('DD MMMM YYYY');
    return (
        <Link to={`/blog/${data.id}`} className={cx('container')}>
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
                            {data.author.name}
                        </div>
                        <div className={cx('name')}>
                            {data.name}
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('item')}>
                                {date}
                            </div>
                            <div className={cx('item')}>
                                {data.view} Views
                            </div>
                        </div>
                    </div>

                </>
            }
        </Link>
    )
}

export default BlogLayout