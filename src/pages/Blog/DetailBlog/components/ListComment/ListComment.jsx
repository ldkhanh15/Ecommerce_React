import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Comment from '../../../../../components/Comment/Comment'
const cx = classNames.bind(styles)
const ListComment = ({id, data }) => {
  const rootComments = data?.filter(item => item.idParent === null);

  const renderComment = (comment) => {
    return(
      <div key={comment.id}>
        <Comment id={id} data={comment} />
        {renderReplies(comment.id)}
      </div>
    )
  };

  const renderReplies = (parentId) => {
    const replies = data.filter(item => item.idParent === String(parentId));
    if(replies.length === 0) return null;
    return (
      <div style={{ marginLeft: '20px' }}>
        {replies.map(reply => (
          <div key={reply.id}>
            <Comment id={id} data={reply} />
            {renderReplies(reply.id)}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={cx('container')}>
      <h2>Comments</h2>
      <div className={cx('main')}>
        {
          rootComments?.map((item) => renderComment(item))
        }
      </div>
    </div>
  )
}

export default ListComment