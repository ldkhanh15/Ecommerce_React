import React from 'react'
import styles from './styles.module.scss'; // Import file CSS
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
const MenuSpecial = ({ data }) => {
    return (
        <>
            {data &&
                <div className={cx('menu-special')}>
                    <div className={cx('main')}>
                        {data.list.map((item, index) => (
                            <div key={index} className={cx('list')}>
                                <h2>{item.title}</h2>
                                <ul>
                                    {item.children.map((child, index) => (
                                        <li key={index}>{child.title}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className={cx('image')}>
                            <img src={data.image.link} alt="" />
                            <div className={cx('content')}>
                                <div className={cx('left')}>
                                    <h2>HOT DEALS</h2>
                                    <h3>Don't miss Trending</h3>
                                    <div className={cx('save')}>
                                        Save to 50%
                                    </div>
                                    <div className={cx('btn')}>
                                        <span>Shop now</span>
                                    </div>
                                </div>
                                <div className={cx('right')}>
                                    <span className={cx('text')}>
                                        <span>25%</span>
                                        <span>off</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MenuSpecial