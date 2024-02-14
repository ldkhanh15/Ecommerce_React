import React from 'react'
import { AiFillTag, AiFillExperiment, AiFillDollarCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const Statistic = () => {

    return (
        <section className={cx('container')}>
            <div className={cx('item')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <AiFillTag/>
                    </div>
                    <div className={cx('content')}>
                        $123,456,789
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('sales')}>TOTAL SALES</div>
                    <div className={cx(['inc-number','red'])}>-18%</div>
                    <div className={cx(['icon','red'])}>
                        <AiOutlineArrowDown/>
                    </div>
                </div>

            </div>
            <div className={cx('item')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <AiFillExperiment/>
                    </div>
                    <div className={cx('content')}>
                        $123,456,789
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('sales')}>TOTAL SALES</div>
                    <div className={cx(['inc-number','red'])}>-18%</div>
                    <div className={cx(['icon','red'])}>
                        <AiOutlineArrowDown/>
                    </div>
                </div>

            </div>
            <div className={cx('item')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <AiFillDollarCircle/>
                    </div>
                    <div className={cx('content')}>
                        $123,456,789
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('sales')}>TOTAL SALES</div>
                    <div className={cx(['inc-number','green'])}>+18%</div>
                    <div className={cx(['icon','green'])}>
                        <AiOutlineArrowUp/>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Statistic