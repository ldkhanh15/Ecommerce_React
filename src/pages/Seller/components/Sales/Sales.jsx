import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import { AiOutlineCaretDown } from 'react-icons/ai'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const data = [
    {
        data2: 2000,
        data1: 2400,
    },
    {
        data2: 10000,
        data1: 1398,
    },
    {
        data2: 5000,
        data1: 12800,
    },
    {
        data2: 8780,
        data1: 3908,
    },
    {
        data2: 9890,
        data1: 4800,
    },
    {
        data2: 11390,
        data1: 3800,
    },
    {
        data2: 3490,
        data1: 4300,
    },
];
const Sale = () => {

    return (
        <section className={cx('container')}>
            <div className={cx('details')}>
                <div className={cx('text')}>
                    <h2>Sales Overview</h2>
                </div>
                <button>
                    Monthly
                    <AiOutlineCaretDown />
                </button>
            </div>
            <div className={cx('graph')}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={500}
                        height={400}
                        data={data}
                        margin={{ top: 10 }}
                    >
                        <defs>
                            <linearGradient id='colorview' x1="0" y1="0" x2="0" y2="1">
                                <stop offset="30%" stopColor='#668dff' stopOpacity={0.4} />
                                <stop offset="85%" stopColor='#d4e0ff' stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} />
                        <Area type="monotone" dataKey="data2"
                            stroke='#668dff'
                            fill='url(#colorview)'
                        />
                        <Area type="monotone" dataKey="data1"
                            stroke='#668dff'
                            fill='url(#colorview)'
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
export default Sale