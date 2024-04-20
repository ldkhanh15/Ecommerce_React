import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

import { toast } from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { getProductDetail, getSize, updateProduct } from '@/services/productService';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles)
const ViewProduct = () => {
  const { id } = useParams();
  const [size, setSize] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let resSize = await getSize();
      let resProduct = await getProductDetail(id);
      console.log(resProduct.data);
      let color = [];
      resProduct.data.color.map(item => color.push(item['name']))
      let combo = [];
      resProduct.data.combo.map(item => combo.push(item['name']))
      let size = [];
      resProduct.data.size.map(item => size.push(item['name']))
      let arr = []
      resProduct.data.image.map(item => {
        arr.push(item.link)
      })
      setData({
        id: resProduct.data.id,
        nameProduct: resProduct.data.name,
        price: resProduct.data.price,
        sale: resProduct.data.sale,
        idCate: resProduct.data.idCate,
        introduce: resProduct.data.introduce,
        brand: resProduct.data.brand,
        additional: resProduct.data.detailProduct.additional,
        description: resProduct.data.detailProduct.description,
        quantity: resProduct.data.detailProduct.quantity,
        color: color || [],
        size: size || [],
        combo: combo || [],
        images: arr || []
      })
      setSize(resSize.data);
    }
    getData();
  }, [])

  const [item, setItem] = useState([]);
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  let check = true
  const handleImageChange = (event) => {
    if (check) {
      check = false;
      setData({
        ...data,
        images: []
      })
    }
    const files = Array.from(event.target.files);
    let arr = [...data.images]
    files.map((file) => {
      arr.push((file))
    })

    setData({
      ...data,
      images: arr,
    })

  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...data.images];
    updatedImages.splice(index, 1);
    setData({
      ...data,
      images: updatedImages
    })
  };

  const handleAddCombo = (type) => {
    setData({
      ...data,
      [type]: [...data[type], item[type]]
    })
    setItem({
      ...item,
      [type]: ''
    })
  }
  const handleDeleteCombo = (type, index) => {
    if (type === 'combo') {
      let arr = [...data.combo];
      arr.splice(index, 1);
      setData({
        ...data,
        [type]: arr
      })
    } else if (type === 'color') {
      let arr = [...data.color];
      arr.splice(index, 1);
      setData({
        ...data,
        [type]: arr
      })
    } else if (type === 'size') {
      let arr = [...data.size];
      arr.splice(index, 1);
      setData({
        ...data,
        [type]: arr
      })
    }
  }

  const handleAdd = async () => {
    let res = await updateProduct({
      ...data,
      id:`${data.id}`
    })
    res.code === 1 ? toast.success(res.message) : toast.error(res.message)
  }

  const handleAddSize = (e) => {
    let isExisted = data?.size?.includes(e.target.value);
    if (!isExisted) {
      setData({
        ...data,
        size: [...data.size, e.target.value]
      })
    }
  }
  const handleChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const slider = React.useRef(null);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={cx('container')}>
      <h1>Detail Product</h1>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <div className={cx('input')}>
            <label htmlFor='images'>Choose product images</label>
            <input
              id='images'
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <div className={cx('review')}>
            {
              data?.images?.length > 0 && <div className={cx('slick-page')}>
                <button className={cx('btn')} onClick={() => slider?.current?.slickPrev()}>
                  <IoIosArrowRoundBack className={cx('prev')} />
                </button>
                <button className={cx('btn')} onClick={() => slider?.current?.slickNext()}>
                  <IoIosArrowRoundForward className={cx('next')} />
                </button>
              </div>
            }
            <Slider ref={slider} {...settings}>
              {data?.images?.map((image, index) => (
                <div className={cx('item-slider')} key={index}>
                  <img key={index} src={image} alt={`Image ${index}`} />
                  <div className={cx('del')} onClick={() => handleRemoveImage(index)}><LiaTimesSolid /></div>
                </div>
              ))}

            </Slider>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('input')}>
            <label htmlFor="name">Name</label>
            <input value={data.nameProduct} onChange={(e) => handleChangeInput(e)} id='name' type="text" name='nameProduct' placeholder='Name of product' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="Price">Price</label>
            <input value={data.price} onChange={(e) => handleChangeInput(e)} id='Price' type="number" min={0} name='price' placeholder='Price of product' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="quantity">Quantity</label>
            <input value={data.quantity} onChange={(e) => handleChangeInput(e)} id='quantity' type="text" name='quantity' placeholder='Quantity product' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="sale">Sale</label>
            <input value={data.sale} onChange={(e) => handleChangeInput(e)} id='sale' type="number" min={0} name='sale' placeholder='Quantity product' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="Brand">Brand</label>
            <input value={data.brand} onChange={(e) => handleChangeInput(e)} id='Brand' type="text" min={0} name='brand' placeholder='Quantity product' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="introduce">Introduce</label>
            <textarea value={data.introduce} onChange={(e) => handleChangeInput(e)} id='introduce' name='introduce' cols={50} rows={5}></textarea>
          </div>
          <div className={cx('input')}>
            <label htmlFor="Description">Description</label>
            <textarea value={data.description} onChange={(e) => handleChangeInput(e)} id='Description' name='description' cols={50} rows={5}></textarea>
          </div>
          <div className={cx('input')}>
            <label htmlFor="additional">Additional</label>
            <textarea value={data.additional} onChange={(e) => handleChangeInput(e)} id='additional' name='additional' cols={50} rows={5}></textarea>
          </div>
          <div className={cx('input')}>
            <label htmlFor="color">Color</label>
            <div className={cx('combo')} id="color">
              <button disabled={data?.combo?.length > 0 || data?.size?.length > 0 ? true : false} onClick={() => handleAddCombo('color')} className={cx('add-combo')}>
                Add
              </button>
              <input value={item['color']} onChange={(e) => handleChange(e)} type="text" name='color' placeholder='Color item' />
            </div>
            <div className={cx('list-combo')}>
              {
                data?.color?.map((value, index) => (
                  <div className={cx('item-combo')} onClick={() => handleDeleteCombo('color', index)} key={index}>
                    {value}
                    <span><LiaTimesSolid /></span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cx('input')}>
            <label htmlFor="size">Sizes</label>
            <select disabled={data?.color?.length > 0 || data?.combo?.length > 0 ? true : false} onChange={(e) => handleAddSize(e)} name='size' id='size'>
              <option defaultChecked value=''>Choose color</option>
              {
                size && size.map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))
              }
            </select>
            <div className={cx('list-combo')}>
              {
                data?.size?.map((value, index) => (
                  <div className={cx('item-combo')} onClick={() => handleDeleteCombo('size', index)} key={index}>
                    {value}
                    <span><LiaTimesSolid /></span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cx('input')}>
            <label htmlFor="combo">Combo</label>
            <div className={cx('combo')} id="combo">
              <button disabled={data?.color?.length > 0 || data?.size?.length > 0 ? true : false} onClick={() => handleAddCombo('combo')} className={cx('add-combo')}>
                Add
              </button>
              <input value={item['combo']} onChange={(e) => handleChange(e)} type="text" name='combo' placeholder='Combo item' />
            </div>
            <div className={cx('list-combo')}>
              {
                data?.combo?.map((value, index) => (
                  <div className={cx('item-combo')} onClick={() => handleDeleteCombo('combo', index)} key={index}>
                    {value}
                    <span><LiaTimesSolid /></span>
                  </div>
                ))
              }
            </div>
          </div>
          <Button onClick={() => handleAdd()} large primary>Update product</Button>
        </div>
      </div>

    </div>
  );
};

export default ViewProduct;