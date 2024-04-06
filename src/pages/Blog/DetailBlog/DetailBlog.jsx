import SideBar from '@/components/Blog/SideBar/SideBar';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import Button from '@/components/Button';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
import CreateComment from '../../../components/CreateComment/CreateComment';
import ListComment from './components/ListComment/ListComment';
import { Helmet } from 'react-helmet';
import { getDetailBlog } from '@/services/blogService';
import moment from 'moment';
const cx = classNames.bind(styles)
const DetailBlog = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = async () => {
            let res = await getDetailBlog(id);
            setData(res.data);
        }
        getData();
    }, [])
    console.log(data);
    return (
        <div className={cx('container')}>
            <Helmet>
                <title>Best smartwatch 2024: the top wearables you can buy today</title>
            </Helmet>
            <div className={cx('left')}>
                <div className={cx('header')}>
                    <div className={cx('cate')}>
                        {data.field}
                    </div>
                    <div className={cx('name')}>
                        {data.name}
                    </div>
                    <div className={cx('info')}>

                        <div className={cx('item')}>
                            <img src={data?.author?.avatar} alt="" />
                            <div className={cx('name-author')}>
                                By <strong>{data?.author?.name}</strong>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            {moment(data.createdAt).format('DD MMMM YYYY')}
                        </div>
                        <div className={cx('item')}>
                            {moment(data.updatedAt).fromNow()}
                        </div>

                    </div>
                </div>
                <div className={cx('main')}>
                    <img src={data.image} alt="" />
                    <div className={cx('content')}>
                        <div dangerouslySetInnerHTML={{ __html: data?.detail?.contentHTML }}></div>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('tag')}>
                       {
                        data?.tag?.map((item,index)=>(
                            <Button primary small key={index}> {item.name}</Button>
                        ))
                       }
                        
                    </div>
                    <div className={cx('share')}>
                        Share this:
                        <FaFacebook />
                        <BsTwitter />
                        <BsInstagram />
                        <BsPinterest />
                    </div>
                </div>
                <div className={cx('author-comment')}>
                    <div className={cx('main')}>
                        <div className={cx('header-comment')}>
                            <div className={cx('avatar')}>
                                <img src={data?.author?.avatar} alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('top')}>
                                    {data?.author?.name}
                                </div>
                                <div className={cx('bottom')}>
                                    <div className={cx('item')}>
                                        306 posts
                                    </div>
                                    <div className={cx('item')}>
                                        Since 2012
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('footer-comment')}>
                            {data?.detail?.comment}
                        </div>
                    </div>
                </div>
                <div className={cx('comment')}>
                    <CreateComment />
                    <ListComment data={data?.comment}/>
                </div>
            </div>
            <div className={cx('right')}>
                <SideBar />
            </div>
        </div>
    )
}

export default DetailBlog