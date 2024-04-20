import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import StarRatings from 'react-star-ratings'
import { createCommentOfBLog } from '@/services/blogService';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles)
const CreateComment = ({ id, user }) => {
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState('');

  const handlePostComment = async () => {
    let res = await createCommentOfBLog({
      idBlog: `${id}`,
      idAuthor: `${user.id}`,
      comment,
      star:`${star}`
    })
    if(res.code){
      toast.success(res.message)
    }else{
      toast.error(res.message)
    }
  }
  return (
    <div className={cx('container')}>
      <h2>Leave a Comment</h2>
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
      <div className={cx('form')}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Write Comment'></textarea>
        <button onClick={() => handlePostComment()}>Post Comment</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)