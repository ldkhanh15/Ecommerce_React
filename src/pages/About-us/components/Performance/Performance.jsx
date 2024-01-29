import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'


const cx = classNames.bind(styles)
const Performance = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('top')}>
                <div className={cx('left')}>
                    <img src="/images/about/about-5.png" alt="" />
                </div>
                <div className={cx('right')}>
                    <div className={cx('sub-title')}>
                        Our performance
                    </div>
                    <div className={cx('title')}>
                        Your Partner for e-commerce grocery solution
                    </div>
                    <p>
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        <br />
                        <br />
                        Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    </p>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('item')}>
                    <h3>Who we are</h3>
                    <span className={cx('desc')}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </span>
                </div>
                <div className={cx('item')}>
                    <h3>Our history</h3>
                    <span className={cx('desc')}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </span>
                </div>
                <div className={cx('item')}>
                    <h3>Our mission</h3>
                    <span className={cx('desc')}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Performance