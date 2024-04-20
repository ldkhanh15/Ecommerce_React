import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSend } from 'react-icons/bi';
import moment from 'moment'
import { connect } from 'react-redux';
import { createCommentOfBLog } from '@/services/blogService';
import { toast } from 'react-toastify';
import StarRatings from 'react-star-ratings'
const cx = classNames.bind(styles)
const Comment = ({ data, id, user }) => {
    const [open, setOpen] = useState(false)
    const time = moment(data.createdAt).format('hh:mm   DD MMMM YYYY');
    const [comment, setComment] = useState('')
    const [star, setStar] = useState(0)
    const handleReply = async () => {
        let res = await createCommentOfBLog({
            idBlog: `${id}`,
            idAuthor: `${user.id}`,
            comment,
            star: `${star}`,
            idParent: `${data.id}`
        })
        if (res.code) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }
    }
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
                            {time}
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
                <div className={cx('box-reply')}>
                    <StarRatings
                        rating={star}
                        starRatedColor="orange"
                        changeRating={(star) => setStar(star)}
                        numberOfStars={5}
                        name='rating'
                        starHoverColor='orange'
                        starEmptyColor='#ddd'
                        starDimension='4rem'
                    />
                    <div className={cx('reply-comment')}>
                        <div className={cx('image')}>
                            <img src={data.user.avatar} alt="" />
                        </div>
                        <div className={cx('input')}>
                            <input value={comment} onChange={(e) => setComment(e.target.value)} autoFocus type="text" placeholder='Write a reply comment' />
                            <BiSend onClick={() => handleReply()} className={cx('icon')} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)