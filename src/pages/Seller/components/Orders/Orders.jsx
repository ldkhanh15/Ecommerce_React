import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Order = () => {

    return (
        <section className={cx('container')}>
            <div className={cx('header')}>
                <h2>Recent Order</h2>
                <span>SEE ALL</span>
            </div>
            <div className={cx('track')}>
                <table>
                    <tr>
                        <th>Tracking ID</th>
                        <th>Product Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>
                            <img src={''} alt="" />
                            <span>Apple Watch</span>
                        </td>
                        <td>
                            Sep 14, 2023
                        </td>
                        <td>$399</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>
                            <img src={''} alt="" />
                            <span>Apple Watch</span>
                        </td>
                        <td>
                            Sep 14, 2023
                        </td>
                        <td>$399</td>
                        <td>Complete</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}
export default Order