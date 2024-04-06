import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { createSize, updateSize } from '@/services/productService';
const cx = classNames.bind(styles);
Modal.setAppElement('#root');
const UiSize = ({ open, setOpen, dataChildren }) => {
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
    const handleAdd = async () => {
        if (Object.keys(dataChildren).length > 0) {
            let res = await updateSize({
                id: `${data.id}`,
                nameSize: data.name,
            })
            console.log(res);
        } else {
            let res = await createSize({
                nameSize:data.name,
            })
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
                {Object.keys(dataChildren).length > 0 ? <h1>View Size Product</h1> : <h1>Add new Size Product</h1>}
                    <div onClick={() => setOpen(false)} className={cx('icon-close')}>
                        <LiaTimesSolid />
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('input')}>
                        <label htmlFor="title">
                            Name:
                        </label>
                        <input onChange={(e)=>handleChange(e)} id='title' type="text" name='name' value={data.name} placeholder="Name Size" />
                    </div>
                    <Button onClick={()=>handleAdd()} primary large> {Object.keys(dataChildren).length > 0 ? "Update Size" : "Add new Size"}</Button>
                </div>

            </div>
        </Modal>
    )
}

export default UiSize