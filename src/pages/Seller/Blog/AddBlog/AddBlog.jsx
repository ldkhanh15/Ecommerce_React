import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@/components/Button'
import { createBlog } from '@/services/blogService';
const cx = classNames.bind(styles)

const mdParser = new MarkdownIt();
const AddBlog = () => {
  const navigate=useNavigate();
  const [tag, setTag] = useState('');
  const [data, setData] = useState({});
  const handleEditorChange = ({ html, text }) => {
    setData({
      ...data,
      content: text,
      contentHTML: html
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeImage = (e) => {
    setData({
      ...data,
      image: e.target.files[0]
    })
  }
  const handleAdd = () => {
    let tags = data.tag ? [...data.tag] : [];
    tags.push({
      name: tag
    });
    setData({
      ...data,
      tag: tags
    })

    setTag('');
  }
  const handleAddBlog = async () => {
    let res = await createBlog(data);
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    if(res){
      navigate('/seller/blog')
    }
  }
  return (
    <div className={cx('container')}>
      <h1>Blog Detail</h1>
      <div className={cx('main')}>
        <div className={cx('info')}>
          <div className={cx('left')}>
            <div className={cx('input')}>
              <label htmlFor="title">Title</label>
              <input value={data.name} onChange={e => handleChange(e)} id='title' type="text" placeholder='Title' name="name" />
            </div>
            <div className={cx('input')}>
              <label htmlFor="">Field</label>
              <input value={data.field} onChange={e => handleChange(e)} type="text" placeholder='Field' name='field' />
            </div>
            <div className={cx('input')}>
              <label htmlFor="tag">Hashtag</label>
              <div className={cx('tag')} >
                <button onClick={() => handleAdd()} className={cx('add-tag')}>
                  Add
                </button>
                <input value={tag} onChange={e => setTag(e.target.value)} id="tag" type="text" name='tag' placeholder='Hashtag' />
              </div>
              <div className={cx('list-tag')}>
                {
                  data?.tag?.map((value, index) => (
                    <div className={cx('item-tag')} key={index}>
                      {value.name}
                      <span><LiaTimesSolid /></span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={cx('input')}>
              <label htmlFor="">Comment</label>
              <input value={data.comment} onChange={e => handleChange(e)} type="text" placeholder='Comment' name='comment' />
            </div>
          </div>
          <div className={cx('right')}>
            <img src="https://th.bing.com/th/id/R.7fda0c9f34fdba0ab143c127eef8c9f1?rik=cjecNcZRNyT%2bnQ&pid=ImgRaw&r=0" alt="" />
            <input type="file" onChange={(e) => handleChangeImage(e)} />
          </div>
        </div>
        <div className='content'>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            value={data.content}
          />
        </div>
        <div className={cx('btn')}>
          <Button onClick={() => handleAddBlog()} primary large>Add Blog</Button>
        </div>

      </div>
    </div>
  )
}

export default AddBlog