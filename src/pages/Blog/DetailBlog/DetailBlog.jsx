import SideBar from '@/components/Blog/SideBar/SideBar';
import React from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import Button from '@/components/Button';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
import CreateComment from '../../../components/CreateComment/CreateComment';
import ListComment from './components/ListComment/ListComment';
import { Helmet } from 'react-helmet';
const cx = classNames.bind(styles)
const DetailBlog = () => {
    const { id } = useParams();
    return (
        <div className={cx('container')}>
            <Helmet>
                <title>Best smartwatch 2024: the top wearables you can buy today</title>

            </Helmet>
            <div className={cx('left')}>
                <div className={cx('header')}>
                    <div className={cx('cate')}>
                        Recipes
                    </div>
                    <div className={cx('name')}>
                        Best smartwatch 2024: the top wearables you can buy today
                    </div>
                    <div className={cx('info')}>

                        <div className={cx('item')}>
                            <img src="/images/other/author-1.png" alt="" />
                            <div className={cx('name-author')}>
                                By <strong>Sugar Rosé</strong>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            2 hours ago
                        </div>
                        <div className={cx('item')}>
                            8 mins read
                        </div>

                    </div>
                </div>
                <div className={cx('main')}>
                    <img src="/images/blog/blog-19.png" alt="" />
                    <div className={cx('content')}>
                        <h2>
                            Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.
                        </h2>
                        <p>

                            We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.

                            Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you’ll see it show up in a lot of these devices.
                        </p>
                        <h4>
                            <strong>
                                Lorem ipsum dolor sit amet cons
                            </strong>
                        </h4>
                        <p>
                            Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
                        </p>
                        <img src="/images/blog/blog-21.png" alt="" />
                        <p>
                            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus
                        </p>
                        <div className={cx('box')}>
                            <h4>
                                Integer eu faucibus dolor<sup>[5]</sup>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
                            </h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
                        </p>

                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('tag')}>
                        <Button primary small> deer</Button>
                        <Button primary small> nature</Button>
                        <Button primary small> conserve</Button>
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
                                <img src="/images/other/author-1.png" alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('top')}>
                                    Barbara Cartland
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
                            Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero
                        </div>
                    </div>
                </div>
                <div className={cx('comment')}>
                    <CreateComment />
                    <ListComment />
                </div>
            </div>
            <div className={cx('right')}>
                <SideBar />
            </div>
        </div>
    )
}

export default DetailBlog