import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '@/components/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { createProduct, getSize } from '@/services/productService';
const AddProduct = () => {
    const [images, setImages] = useState([]);
    const [item, setItem] = useState([]);

    const [size, setSize] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await getSize();
            setSize(res.data);
        }
        getData();
        console.log(size);
    }, [])
    const [selectedSize, setSelectedSize] = useState([]);

    const [color, setColor] = useState([]);
    const [combo, setCombo] = useState([]);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }
    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages([...images, ...selectedImages]);
    };
    const handleRemoveImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };
    const handleAddCombo = (type) => {
        if (type === 'combo') {
            setCombo([...combo, item[type]])

        } else if (type === 'color') {
            setColor([...color, item[type]])
        }
        setItem({
            ...item,
            [type]: ''
        })
    }
    const handleDeleteCombo = (type, index) => {
        if (type === 'combo') {
            let arr = [...combo];
            arr.splice(index, 1);
            setCombo(arr);
        } else if (type === 'color') {
            let arr = [...color];
            arr.splice(index, 1);
            setColor(arr);
        } else if (type === 'size') {
            let arr = [...selectedSize];
            arr.splice(index, 1);
            setSelectedSize(arr);
        }
    }
    const handleAdd = async () => {
        console.log({
            ...data,
            images: images,
            combo: [...combo],
            idCate: 1,
            color: [...color],
            size: [...selectedSize]
        });
        let res = await createProduct({
            ...data,
            images: images,
            combo: [...combo],
            idCate: 1
        })
        console.log(res);
    }
    const handleAddSize = (e) => {
        let isExisted = selectedSize.includes(e.target.value);
        console.log(isExisted);
        if (!isExisted) {
            setSelectedSize([...selectedSize, e.target.value])
        }
    }
    const handleChangeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
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
            <h1>Add Product</h1>
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
                            images.length > 0 && <div className={cx('slick-page')}>
                                <button className={cx('btn')} onClick={() => slider?.current?.slickPrev()}>
                                    <IoIosArrowRoundBack className={cx('prev')} />
                                </button>
                                <button className={cx('btn')} onClick={() => slider?.current?.slickNext()}>
                                    <IoIosArrowRoundForward className={cx('next')} />
                                </button>
                            </div>
                        }
                        <Slider ref={slider} {...settings}>
                            {images.map((image, index) => (
                                <div className={cx('item-slider')} key={index}>
                                    <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                    <div className={cx('del')} onClick={() => handleRemoveImage(index)}><LiaTimesSolid /></div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('input')}>
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => handleChangeInput(e)} id='name' type="text" name='nameProduct' placeholder='Name of product' />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="Price">Price</label>
                        <input onChange={(e) => handleChangeInput(e)} id='Price' type="number" min={0} name='price' placeholder='Price of product' />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="quantity">Quantity</label>
                        <input onChange={(e) => handleChangeInput(e)} id='quantity' type="text" name='quantity' placeholder='Quantity product' />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="sale">Sale</label>
                        <input onChange={(e) => handleChangeInput(e)} id='sale' type="number" min={0} name='sale' placeholder='Quantity product' />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="Brand">Brand</label>
                        <input onChange={(e) => handleChangeInput(e)} id='Brand' type="text" min={0} name='brand' placeholder='Quantity product' />
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="introduce">Introduce</label>
                        <textarea onChange={(e) => handleChangeInput(e)} id='introduce' name='introduce' cols={50} rows={5}></textarea>
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="Description">Description</label>
                        <textarea onChange={(e) => handleChangeInput(e)} id='Description' name='description' cols={50} rows={5}></textarea>
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="additional">Additional</label>
                        <textarea onChange={(e) => handleChangeInput(e)} id='additional' name='additional' cols={50} rows={5}></textarea>
                    </div>
                    <div className={cx('input')}>
                        <label htmlFor="color">Color</label>
                        <div className={cx('combo')} id="color">
                            <button disabled={combo.length > 0 || selectedSize.length > 0 ? true : false} onClick={() => handleAddCombo('color')} className={cx('add-combo')}>
                                Add
                            </button>
                            <input value={item['color']} onChange={(e) => handleChange(e)} type="text" name='color' placeholder='Color item' />
                        </div>
                        <div className={cx('list-combo')}>
                            {
                                color.map((value, index) => (
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
                        <select disabled={color.length > 0 || combo.length > 0 ? true : false} onChange={(e) => handleAddSize(e)} name='size' id='size'>
                            <option defaultChecked value=''>Choose color</option>
                            {
                                size && size.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))
                            }

                        </select>
                        <div className={cx('list-combo')}>
                            {
                                selectedSize.map((value, index) => (
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
                            <button disabled={color.length > 0 || selectedSize.length > 0 ? true : false} onClick={() => handleAddCombo('combo')} className={cx('add-combo')}>
                                Add
                            </button>
                            <input value={item['combo']} onChange={(e) => handleChange(e)} type="text" name='combo' placeholder='Combo item' />
                        </div>
                        <div className={cx('list-combo')}>
                            {
                                combo.map((value, index) => (
                                    <div className={cx('item-combo')} onClick={() => handleDeleteCombo('combo', index)} key={index}>
                                        {value}
                                        <span><LiaTimesSolid /></span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Button onClick={() => handleAdd()} large primary>Add new product</Button>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;