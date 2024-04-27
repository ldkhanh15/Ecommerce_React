import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { createCate, updateCate, uploadImage } from '@/services/categoryService';
import { toast } from 'react-toastify'
const cx = classNames.bind(styles);
Modal.setAppElement('#root');
const UiCate = ({ setLoading, open, setOpen, dataChildren }) => {
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
            res.code === 1 ? toast.success(res.message) : toast.error(res.message)
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
        setLoading(true)
        if (Object.keys(dataChildren).length > 0) {
            let res = await updateCate({
                id: `${data.id}`,
                name: data.name,
                quantity: data.quantity,
                featured: `${data.featured}`
            })
            res.code === 1 ? toast.success(res.message) : toast.error(res.message)
        } else {
            let res = await createCate(data)
            res.code === 1 ? toast.success(res.message) : toast.error(res.message)
        }
        setLoading(false)
        setOpen(false)

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
                    {Object.keys(dataChildren).length > 0 ? <h1>View Category</h1> : <h1>Add new Category</h1>}
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
                            <input name='image' onChange={(e) => handleChangeImage(e)} type="file" />
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
                                Name:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='title' type="text" name='name' value={data.name} placeholder="Name Category" />
                        </div>

                        <div className={cx('input-bool')}>
                            <label htmlFor="main">Is Feature ?</label>
                            <div className={cx('input')}>
                                <input onChange={(e) => handleChange(e)} type="radio" id='true' name='featured' value={"true"} defaultChecked={data.featured ? true : false} />
                                <label htmlFor='true'>True</label>
                            </div>
                            <div className={cx('input')}>
                                <input onChange={(e) => handleChange(e)} type="radio" id='false' name='featured' value={"false"} defaultChecked={!data.featured ? true : false} />
                                <label htmlFor='false'>False</label>
                            </div>
                        </div>
                        <Button onClick={() => handleAdd()} primary large>
                            {Object.keys(dataChildren).length === 0 ? "Add new Category" : "Update Category"}
                        </Button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default UiCate