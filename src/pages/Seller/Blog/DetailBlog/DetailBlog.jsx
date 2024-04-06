import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles.module.scss'
import { useParams } from 'react-router-dom'
import { getDetailBlog, updateBlog } from '@/services/blogService'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@/components/Button'
const cx = classNames.bind(styles)

const mdParser = new MarkdownIt();
const DetailBlog = () => {
  let { id } = useParams();
  const [tag, setTag] = useState('');
  const [data, setData] = useState({});
  const [upload, setUpload] = useState();
  useEffect(() => {
    const getData = async () => {
      let res = await getDetailBlog(id);
      setData({
        field: res.data.field,
        id: res.data.id,
        name: res.data.name,
        image: res.data.image,
        tag: res.data.tag,
        content: res.data.detail.content,
        contentHTML: res.data.detail.contentHTML,
        comment: res.data.detail.comment
      })
    }
    getData()
  }, [])

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
  const handleAdd = () => {
    let tags = [...data.tag];
    tags.push({
      name: tag
    });
    setData({
      ...data,
      tag: tags
    })
    setTag('');
  }
  const handleUpdate = async () => {
    let res = await updateBlog({
      id: `${data.id}`,
      field: data.field,
      name: data.name,
      tag: data.tag,
      content: data.content,
      contentHTML: data.contentHTML,
      comment: data.comment
    });
    console.log(res);
  }
  const handleChangeImage = async (e) => {

  }
  const handleConvert = async () => {

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
            <div className={cx('upload')}>
              <label htmlFor="convert">Convert image to link</label>
              <div className={cx('input-upload')}>
                <input onChange={(e) => setUpload(e.target.files[0])} type="file" />
                <div className={cx('btn')}>
                  <Button onClick={() => handleConvert()} primary large>Convert</Button>
                </div>
              </div>
              <div className={cx('image')}>
                <input type="text" readOnly />
                <img src={upload ? URL.createObjectURL(upload) : ''} alt="" />
              </div>
            </div>
          </div>
          <div className={cx('right')}>
            <img src={data.image} alt="" />
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
          <Button onClick={() => handleUpdate()} primary large>Update</Button>
        </div>
      </div>
    </div>
  )
}

export default DetailBlog