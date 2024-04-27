import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import Button from '@/components/Button'
import { getShopDetail, updateAvatarShop, updateShop } from '@/services/shopService'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '@/components/Loading/Loading'
import { connect } from 'react-redux'
const cx = classNames.bind(styles)
const AccountDetail = ({ user }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const getData = async () => {
    let res = await getShopDetail(id);
    setData(res.data[0])
  }
  useEffect(() => {
    setLoading(true)
    getData();
    setLoading(false)
  }, [])
  const handleChange = (e, name) => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }
  const handleUpdate = async () => {
    setLoading(true)
    let res = await updateShop({
      id: `${data.id}`,
      name: data.name,
      username: data.username,
      phone: data.phone,
      bank: data.bank,
      introduce: data.introduce,
      address: data.address,
    })
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    setLoading(false)
    if (user.role === 'R1') {
      navigate('/seller/account')
    }else{
      navigate(`/seller/account/${user.id}`)
    }
  }

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setLoading(true)
    let res = await updateAvatarShop({
      id: `${data.id}`,
      image: file
    })
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
    setTimeout(() => {
      getData();
    }, 200)
    setLoading(false)
  }
  return (
    <>
      {
        loading ? <Loading /> : <div className={cx('container')}>
          {
            data && <>
              <h1>AccountDetail</h1>
              <div className={cx('main')}>
                <div className={cx('left')}>
                  <div className={cx('avatar')}>
                    <img src={data.avatar} alt="" />
                  </div>
                  <div className={cx('name')}>
                    {data.name}
                  </div>
                  <div className={cx('change-avatar')}>
                    <label htmlFor="image">Change avatar</label>
                    <input type="file" id='image' onChange={(e) => handleImage(e)} />
                  </div>

                </div>
                <div className={cx('right')}>
                  <input onChange={(e) => handleChange(e, 'name')} type="text" placeholder='Shop Name' value={data.name} />
                  <input onChange={(e) => handleChange(e, 'username')} type="text" placeholder='Username' value={data.username} />
                  <textarea onChange={(e) => handleChange(e, 'introduce')} type="text" rows={20} cols={10} placeholder='Description' value={data.introduce}></textarea>
                  <input onChange={(e) => handleChange(e, 'address')} type="text" placeholder='Address' value={data.address} />
                  <input onChange={(e) => handleChange(e, 'phone')} type="text" placeholder='Phone' value={data.phone} />
                  <input onChange={(e) => handleChange(e, 'bank')} type="text" placeholder='Banking' value={data.bank} />

                  <div className={cx('btn')}>
                    <Button primary large onClick={() => handleUpdate()}>Update</Button>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      }
    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)