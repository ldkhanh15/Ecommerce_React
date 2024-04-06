import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { createBanner, updateBanner, uploadImage } from '@/services/bannerService';
const cx = classNames.bind(styles);
Modal.setAppElement('#root');
const UiBanner = ({ open, setOpen, dataChildren = {} }) => {
    const [data, setData] = useState({})
    useEffect(() => {
        setData(dataChildren)
    }, [dataChildren])
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeImage = async (e) => {
        if (Object.keys(dataChildren).length > 0) {
            const file = e.target.files[0];
            let res = await uploadImage({
                id: `${data.id}`,
                image: file
            })
            setData({
                ...data,
                image: res.image
            })
        } else {
            setData({
                ...data,
                image: e.target.files[0]
            })
        }
    }
    const handleAdd = async () => {
        if (Object.keys(dataChildren).length > 0) {
            let res = await updateBanner({
                id: `${data.id}`,
                start: data.start,
                end: data.end,
                main: data.main,
                title: data.title,
                subTitle: data.subTitle
            })
            console.log(res);
        } else {
            let res = await createBanner(data)
            console.log(res);
        }

    }

    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            className={cx('modal')}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 99999999,
                },
                content: {
                    zIndex: 9999999,
                },
            }}
        >
            <div className={cx('container')}>
                <div className={cx('header')}>
                    {Object.keys(dataChildren).length > 0 ? <h1>View Banner</h1> : <h1>Add new Banner</h1>}
                    <div onClick={() => setOpen(false)} className={cx('icon-close')}>
                        <LiaTimesSolid />
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('left')}>
                        <div className={cx('input')}>
                            <label htmlFor="input">
                                Choose image:
                            </label>
                            <input onChange={(e) => handleChangeImage(e)} name="image" type="file" />
                        </div>
                        <div className={cx('image')}>
                            {
                                Object.keys(dataChildren).length > 0 && <img src={data.image} alt="" />
                            }
                            {
                                Object.keys(dataChildren).length === 0 && data.image !== undefined && <img src={data.image ? URL.createObjectURL(data.image) : ''} />
                            }
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('input')}>
                            <label htmlFor="title">
                                Title:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='title' type="text" name='title' value={data.title} placeholder="Main Title Banner" />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="subtitle">
                                SubTitle:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='subtitle' type="text" name='subTitle' value={data.subTitle} placeholder="Sub Title Banner" />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="start">
                                Start Date:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='start' type="datetime-local" name='start' value={data.start} />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="end">
                                End Date:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='end' type="datetime-local" name='end' value={data.end} />
                        </div>
                        <div className={cx('input-bool')}>
                            <label htmlFor="main">IsMain?</label>
                            <div className={cx('input')}>
                                <input onChange={(e) => handleChange(e)} type="radio" id='true' name='main' defaultChecked={data.main ? true : false} value={"true"} />
                                <label htmlFor='true'>True</label>
                            </div>
                            <div className={cx('input')}>
                                <input onChange={(e) => handleChange(e)} type="radio" id='false' defaultChecked={!data.main ? true : false} name='main' value={"false"} />
                                <label htmlFor='false'>False</label>
                            </div>
                        </div>
                        <Button onClick={() => handleAdd()} primary large>
                            {Object.keys(dataChildren).length == 0 ? "Add new Banner" : "Update Banner"}
                        </Button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default UiBanner