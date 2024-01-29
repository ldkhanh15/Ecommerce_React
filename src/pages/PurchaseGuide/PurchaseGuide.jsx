import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import SideBar from '@/components/Blog/SideBar/SideBar'
import HeaderPageInfo from '@/components/HeaderPageInfo/HeaderPageInfo'
import { Helmet } from 'react-helmet'

const cx = classNames.bind(styles)
const PurchaseGuide = () => {
    return (
        <div className={cx('container')}>
            <Helmet>
                <title>Purchase Guide</title>
            </Helmet>
            <div className={cx('main')}>
                <HeaderPageInfo name="Purchase Guide" />
                <div className={cx('content')}>
                    <img src="/images/other/guide-1.png" alt="" />
                    <h1>1. Account Registering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi dolores neque omnis ipsa? Quia, nam voluptas! Aut, magnam molestias:</p>
                    <ul>
                        <li>Name (required)</li>
                        <li>Age (required)</li>
                        <li>Date of birth (required)</li>
                        <li>Passport/ ID no (required)</li>
                        <li>Current career (required)</li>
                        <li>Mobile phone number (required)</li>
                        <li>Email address (required)</li>
                        <li>Hobbies & interests  (optional)</li>
                        <li>Social profiles  (optional)</li>
                    </ul>
                    <h1>2. Select Product</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia necessitatibus repellat placeat aut enim recusandae assumenda adipisci quisquam, deserunt iure veritatis cupiditate modi aspernatur accusantium, mollitia doloribus. Velit, iste.</p>
                    <h1>3. Confirm Order Content</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
                    <h1>4. Transaction Completed</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
                    <h1>5. Accepted Credit Cards</h1>
                    <ul>
                        <li>Visa</li>
                        <li>Mastercard</li>
                        <li>VietNam Express</li>
                        <li>Discover</li>
                    </ul>
                    <span>*Taxes are calculated by your local bank and location</span>
                    <h1>6. Download and Setup</h1>
                    <ul>
                        <li>Updated content on a regular basis</li>
                        <li>Secure & hassle-free payment</li>
                        <li>One-click to checkout</li>
                        <li>Easy access & smart user dashboard</li>
                    </ul>

                </div>
            </div>
            <div className={cx('side-bar')}>
                <SideBar />
            </div>
        </div>
    )
}

export default PurchaseGuide