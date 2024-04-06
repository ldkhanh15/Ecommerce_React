import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { createDeliver, updateDeliver } from '@/services/deliverService';
const cx = classNames.bind(styles);
Modal.setAppElement('#root');
const UiDeliver = ({ open, setOpen, dataChildren }) => {
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
            let res = await updateDeliver({
                id: `${data.id}`,
                name: data.name,
                price: data.price,
            })
            console.log(res);
        } else {
            let res = await createDeliver({
                name: data.name,
                price: data.price,
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
                    {Object.keys(dataChildren).length > 0 ? <h1>View Payment</h1> : <h1>Add new Payment</h1>}
                    <div onClick={() => setOpen(false)} className={cx('icon-close')}>
                        <LiaTimesSolid />
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('top')}>
                        <div className={cx('input')}>
                            <label htmlFor="title">
                                Name:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='title' type="text" name='name' value={data.name} placeholder="Name Deliver" />
                        </div>
                        <div className={cx('input')}>
                            <label htmlFor="title">
                                Price:
                            </label>
                            <input onChange={(e) => handleChange(e)} id='title' type="number" name='price' value={data.price} placeholder="Deliver Price" />
                        </div>
                    </div>
                    <Button onClick={() => handleAdd()} primary large>  {Object.keys(dataChildren).length > 0 ? "Update deliver" : "Add new deliver"}</Button>
                </div>

            </div>
        </Modal>
    )
}

export default UiDeliver