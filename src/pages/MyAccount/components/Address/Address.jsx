import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { createAddress, deleteAddress, getAddress } from '@/services/userService'
import { connect } from 'react-redux'

const cx = classNames.bind(styles)
const Address = ({ user }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const getData = async () => {
      let res = await getAddress();
      setData(res.data);
    }
    getData();
  }, [data]);
  const handleAdd = async () => {
    if (input !== '') {
      let res = await createAddress({
        idUser: `${user.id}`,
        address: input
      })
      setInput('');
    }
  }
  const handleDelete = async (id) => {
    let res = await deleteAddress(id, user.id)
  }
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
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ? data.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{item.address}</th>
                  <th className={cx('action')}>
                    <button className={cx('del')} onClick={() => handleDelete(item.id)}>Delete</button>
                  </th>
                </tr>
              )) : null
            }
            <tr>
              <th></th>
              <th><input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Add new address' /></th>
              <th className={cx('action')}>
                <button onClick={() => handleAdd()}>Add</button>
              </th>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Address)