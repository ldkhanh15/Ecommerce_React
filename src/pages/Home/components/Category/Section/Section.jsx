import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
// import data from './data'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from '@/components/Button';
import { getBanner } from '@/services/bannerService';
const cx = classNames.bind(styles)

const Section = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await getBanner("false");
            setData(res.data);
        }
        getData();
    }, [])
    return (
        <div className={cx('container')}>
            {data.map((item, index) => (
                <div key={index} className={cx('item')}>
                    <div className={cx('main')}>
                        <img src={item.image} alt="" />
                        <div className={cx('content')}>
                            <h3>{item.title}</h3>
                            <Button medium rightIcon={<IoIosArrowRoundForward />} rounded>Shop now</Button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Section