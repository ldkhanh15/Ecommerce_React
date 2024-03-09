import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Comment from '../../../../../components/Comment/Comment'
const cx=classNames.bind(styles)
const ListComment = ({data}) => {
  return (
    <div className={cx('container')}>
      <h2>Comments</h2>
      <div className={cx('main')}>
         {
          data && data.map((item,index)=> (
            <Comment key={index} data={item}/>
          ))
         }
      </div>
    </div>
  )
}

export default ListComment