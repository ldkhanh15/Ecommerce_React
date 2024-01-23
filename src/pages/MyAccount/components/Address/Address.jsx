import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Address = () => {
  const [def, setDef] = useState(1);

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3>Your Address</h3>
        <p>Add new address for your orders. You should set default address to comfortable when checkout orders.</p>
      </div>
      <div className={cx('main')}>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Address</th>
              <th>Actions</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>K129/60 Phạm Như Xương, phường Hòa Khánh Nam, quận Liên Chiểu, Đà Nẵng</th>
              <th className={cx('action')}>
                <button>Edit</button>
                <button>Delete</button>
              </th>
              <th>
                <label onClick={()=>setDef(1)} className={def===1 ? cx('active') : ''} htmlFor="check1"></label>
                <input defaultChecked type="radio" name='default' />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>K129/60 Phạm Như Xương, phường Hòa Khánh Nam, quận Liên Chiểu, Đà Nẵng</th>
              <th className={cx('action')}>
                <button>Edit</button>
                <button>Delete</button>
              </th>
              <th>
                <label onClick={()=>setDef(2)} className={def===2 ? cx('active') : ''} htmlFor="check1"></label>
                <input type="radio" name='default' />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>K129/60 Phạm Như Xương, phường Hòa Khánh Nam, quận Liên Chiểu, Đà Nẵng</th>
              <th className={cx('action')}>
                <button>Edit</button>
                <button>Delete</button>
              </th>
              <th>
                <label onClick={()=>setDef(3)} className={def===3 ? cx('active') : ''} htmlFor="check1"></label>
                <input type="radio" name='default' />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Address