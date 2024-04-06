import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSend } from 'react-icons/bi';
const cx = classNames.bind(styles)
const Comment = ({ data }) => {
    const [open, setOpen] = useState(false)
    let arr = data.createdAt.split(".");
    let time = arr[0].split("T");
    
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <div className={cx('left')}>
                    <div className={cx('image')}>
                        <img src={data.user.avatar} alt="" />
                    </div>
                    <div className={cx('name')}>
                        {data.user.name}
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('header')}>
                        <div className={cx('time')}>
                            {time[0]} - {time[1]}
                        </div>
                        <div className={cx('rating')}>
                            <div style={{ width: `${data.star / 5 * 100}%` }} className={cx('star')}>

                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        {data.comment}
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('emote')}>
                            
                        </div>
                        <div onClick={() => setOpen(!open)} className={cx('reply')}>
                            Reply
                        </div>
                    </div>
                </div>
            </div>
            {
                open &&
                <>
                    <div className={cx('reply-comment')}>
                        <div className={cx('image')}>
                            <img src={data.user.avatar} alt="" />
                        </div>
                        <div className={cx('input')}>
                            <input autoFocus type="text" placeholder='Write a reply comment' />
                            <BiSend className={cx('icon')} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '3rem' }}>
                        {data.children && data.children.map((item, index) => (
                            <Comment key={index} data={item} />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default Comment