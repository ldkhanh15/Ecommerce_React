import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'


const cx = classNames.bind(styles)
const Welcome = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('left')}>
                <img src="/images/about/about-1.png" alt="" />
            </div>
            <div className={cx('right')}>
                <h2>Welcome to Nest</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                    <br />
                    <br />
                    Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                </p>
            </div>
        </div>
    )
}

export default Welcome