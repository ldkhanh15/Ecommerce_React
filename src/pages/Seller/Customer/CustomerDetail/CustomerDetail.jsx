import { getUser, updateUser } from '@/services/userService';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import Button from '@/components/Button';
import { toast } from 'react-toastify'
import Loading from '@/components/Loading/Loading';

const cx = classNames.bind(styles)
const CustomerDetail = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await getUser(id);
            setData(res.data);
        }
        setLoading(true);
        getData()
        setLoading(false)
    }, [])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdate = async () => {
        setLoading(true)
        let res = await updateUser({
            birthday: data.birthday,
            gender: data.gender,
            id: `${data.id}`,
            name: data.name,
            username: data.username,
            phone: data.phone
        });
        res.code === 1 ? toast.success(res.message) : toast.error(res.message)
        setLoading(false)
    }
    return (
        <>
            {
                loading ? <Loading /> : <div className={cx('container')}>
                    {
                        data && <>
                            <h1>Customer Detail</h1>
                            <div className={cx('main')}>
                                <div className={cx('left')}>
                                    <div className={cx('avatar')}>
                                        <img src={data.avatar} alt="" />
                                    </div>
                                    <div className={cx('change-avatar')}>
                                        <label htmlFor="image">Change avatar</label>
                                        <input type="file" id='image' onChange={(e) => handleImage(e)} />
                                    </div>

                                </div>
                                <div className={cx('right')}>
                                    <input onChange={(e) => handleChange(e)} name="name" type="text" placeholder='Shop Name' value={data.name} />
                                    <input onChange={(e) => handleChange(e)} name="username" type="text" placeholder='Username' value={data.username} />
                                    <input onChange={(e) => handleChange(e)} name="email" type="email" placeholder='email' value={data.email} />
                                    <input onChange={(e) => handleChange(e)} name="birthday" type="date" placeholder='birthday' value={data.birthday?.split('T')[0]} />
                                    <input onChange={(e) => handleChange(e)} name="phone" type="text" placeholder='phone' value={data.phone} />
                                    <select name='gender' onChange={(e) => handleChange(e)}>
                                        <option defaultChecked={data.gender === "false" ? true : false} value={"false"}>Male</option>
                                        <option defaultChecked={data.gender === "true" ? true : false} value={"true"}>FeMale</option>
                                    </select>
                                    <div className={cx('btn')}>
                                        <Button primary large onClick={() => handleUpdate()}>Update</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default CustomerDetail