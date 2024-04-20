import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { getStatus, updateStatusBill } from '@/services/billService';
import {toast} from 'react-toastify'
const cx = classNames.bind(styles);
Modal.setAppElement('#root');
const UiInfo = ({ open, setOpen, dataChildren = {} }) => {
    const [data, setData] = useState({})
    const [status, setStatus] = useState([])
    useEffect(() => {
        const getData = async () => {
            let res = await getStatus();
            setStatus(res.data);
        }
        getData();
        setData(dataChildren)
    }, [dataChildren])
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdate = async () => {
        let res = await updateStatusBill({
            id: `${data.id}`,
            idStatus: data.status
        })
        res.code === 1 ? toast.success(res.message) : toast.error(res.message)
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
                    <h1>Update information order</h1>
                    <div onClick={() => setOpen(false)} className={cx('icon-close')}>
                        <LiaTimesSolid />
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('input')}>
                        <label htmlFor="id">SKU: </label>
                        <input type="text" readOnly id='id' value={data.id} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="status">Status: </label>
                        <select onChange={(e) => handleChange(e)} name="status" id="status" value={data.status}>
                            {
                                status && status.map((item, index) => (
                                    <option defaultChecked={item.id == data.status ? true : false} value={item.id} key={index} >{item.status}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="payment">Payment: </label>
                        <input type="text" readOnly id='payment' value={data.payment} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="deliver">Deliver: </label>
                        <input type="text" readOnly id='deliver' value={data.deliver} />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="address">Address receive: </label>
                        <input onChange={(e) => handleChange(e)} name="address" readOnly type="text" id='address' value={data.address} />
                    </div>
                    <Button onClick={() => handleUpdate()} primary large>Update</Button>
                </div>

            </div>
        </Modal>
    )
}

export default UiInfo