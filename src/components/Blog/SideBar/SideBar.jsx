import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSearch } from 'react-icons/bi'
import {cate,tag,trendingProduct,thumbnail} from './data'
import NewProduct from '@/components/NewProduct/NewProduct'
import { LiaTimesSolid } from 'react-icons/lia'
const cx = classNames.bind(styles)
const SideBar = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('search')}>
                <input type="text" placeholder='Search...' />
                <div className={cx('icon')}>
                    <BiSearch />
                </div>
            </div>
            <div className={cx('item')}>
                <h3 className={cx('title')}>
                    Category
                </h3>
                <ul className={cx('cate')}>
                    {cate.map((item, index) => (
                        <li key={index}>
                            <div className={cx('image')}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={cx('title')}>
                                {item.title}
                            </div>
                            <div className={cx('quantity')}>
                                {item.quantity}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('item')}>
                <h3 className={cx('title')}>
                    Trending Now
                </h3>
                <div className={cx('trending')}>
                    {trendingProduct.map((item, index) => (
                        <NewProduct key={index} data={item} />
                    ))}
                </div>
            </div>
            <div className={cx('item')}>
                <h3 className={cx('title')}>
                    Gallery
                </h3>
                <div className={cx('gallery')}>
                    {thumbnail.map((item, index) => (
                        <div className={cx('image-gallery')} key={index}>
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('item')}>
                <h3 className={cx('title')}>
                    Popular Tags
                </h3>
                <div className={cx('tags')}>
                    {tag.map((item, index) => (
                        <div className={cx('item-tags')} key={index}>
                            <LiaTimesSolid className={cx('icon')} />
                            <div className={cx('text')}>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('banner')}>
                <img src="/images/banner/banner-11.png" alt="" />
                <div className={cx('content')}>
                    <span className={cx('author')}>
                        Oganic
                    </span>
                    <h4 className={cx('text')}>
                        Save 17%
                        <br />
                        on <strong>Oganic</strong> Juice
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SideBar