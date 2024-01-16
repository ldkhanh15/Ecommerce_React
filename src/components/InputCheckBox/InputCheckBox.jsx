import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const InputCheckBox = ({ data }) => {
    const [active,setActive] =useState(false)
    return (
        <div className={cx('input-checkbox')}>
            <input onChange={(e)=>console.log(e.target.value)} id={data.name} className={cx('item')} value={data.title} name="color" type="checkbox" />
            <label className={active ? cx('active') : ''} onClick={()=>setActive(!active)} htmlFor={data.name}>{data.title}</label>
        </div>
    )
}

export default InputCheckBox