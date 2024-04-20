import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '../../Button';
import { FaRandom, FaRegHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { addCart, addWhiteList, addCompare } from '@/redux/action';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles)
const UiModal = ({ data, modal, addCart, addWhiteList, addCompare }) => {
    const [color, setColor] = useState(-1)
    const [combo, setCombo] = useState(-1)
    const [size, setSize] = useState(-1)
    const [quantity, setQuantity] = useState(1)
    const slider = React.useRef(null);
    const settings = {
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div className={cx('dots-slick')} key={i}>
                <img src={data?.image[i]?.link} alt="" />
            </div>
        ),
    };
    const handleAdd = (data) => {
        console.log({
            ...data,
            quantity,
            type: `${data.color[color]?.name}${data.combo[combo]?.name}${data.size[size]?.name} `
        });
        let col = data.color[color].name;
        let com = data.combo[combo].name;
        let si = data.size[size].name;
        addCart({
            ...data,
            quantity,
            type: col || com || si
        });
        toast.success("Add product to cart successfully")
    }
    const handleAddWhiteList = (data) => {
        addWhiteList(data);
        toast.success("Add product to wish-list successfully")
    }
    const handleAddCompare = (data) => {
        addCompare(data);
        toast.success("Add product to compare successfully")
    }
    return (
        <div className={cx('content')}>
            {data && <>
                <div className={cx('left')}>
                    <Slider ref={slider}  {...settings}>
                        {
                            data?.image?.map((item, index) => (
                                <div className={cx('item')} key={index}>
                                    <img src={item.link} alt={item.link} />
                                </div>
                            ))
                        }
                    </Slider>
                    <div className={cx('slick-page')}>
                        <button className={cx('btn')} onClick={() => slider?.current?.slickPrev()}>
                            <IoIosArrowBack className={cx('prev')} />
                        </button>
                        <button className={cx('btn')} onClick={() => slider?.current?.slickNext()}>
                            <IoIosArrowForward className={cx('next')} />
                        </button>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('sale-off')}>
                        Sale off
                    </div>
                    <div className={cx('name')}>
                        {data.name}
                    </div>
                    <div className={cx('review')}>
                        <div className={cx('rating')}>
                            <div style={{ width: `${data.avgStar * 100 / 5}%` }} className={cx('star')}>

                            </div>
                        </div>
                        <div className={cx('count')}>
                            ({data.review?.length} reviews)
                        </div>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('new-price')}>
                            ${Math.round(data.price * (100 - data.sale)) / 100}
                        </div>
                        <div className={cx('old-price')}>
                            <div className={cx('sale')}>
                                {data.sale}% Off
                            </div>
                            <div className={cx('old')}>
                                ${data.price}
                            </div>
                        </div>
                    </div>
                    {
                        !modal && <div className={cx('desc')}>
                            {data.introduce}
                        </div>
                    }
                    {
                        data?.color?.length > 0 ? <div className={cx('color')}>
                            <h3 className={cx('title')}>Color</h3>
                            {
                                data.color.map((item, index) => (
                                    <div onClick={() => { setColor(index), setSize(-1), setCombo(-1) }} key={index} style={{ background: `${item.name}` }} className={index === color ? cx(['item-color', 'active']) : cx('item-color')}>

                                    </div>
                                ))
                            }
                        </div>
                            : null
                    }
                    {
                        data?.size?.length > 0 ? <div className={cx('box')}>
                            <h3 className={cx('title')}>Size</h3>
                            {
                                data.size.map((item, index) => (
                                    <div onClick={() => { setSize(index), setColor(-1), setCombo(-1) }} key={index} className={index === size ? cx(['item-box', 'active']) : cx('item-box')}>
                                        {item.name}
                                    </div>

                                ))
                            }
                        </div>
                            : null
                    }
                    {data?.combo?.length > 0 ? <div className={cx('box')}>

                        <h3 className={cx('title')}>Combo</h3>
                        {

                            data.combo && data.combo.map((item, index) => (
                                <div onClick={() => { setCombo(index), setColor(-1), setSize(-1) }} key={index} className={combo === index ? cx(['item-box', 'active']) : cx('item-box')}>
                                    {item.name}
                                </div>

                            ))

                        }
                    </div>
                        : null
                    }
                    <div className={cx('action')}>
                        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} defaultValue={1} min={1} type="number" />
                        <Button onClick={() => handleAdd(data)} rounded className={cx('btn')}>Add to Cart</Button>
                        <div onClick={() => handleAddWhiteList(data)} className={cx('icon')}>
                            <FaRegHeart />
                        </div>
                        <div onClick={() => handleAddCompare(data)} className={cx('icon')}>
                            <FaRandom />
                        </div>
                    </div>
                    <div className={cx('more')}>
                        <div className={cx('item')}>
                            SKU: <span>{data.id}</span>
                        </div>
                        <div className={cx('item')}>
                            Tag: <span>{data?.cate?.name}</span>
                        </div>
                        <div className={cx('item')}>
                            Available: <span>{data?.detailProduct?.quantity} items in Stock</span>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
    addCart,
    addWhiteList,
    addCompare
}
export default connect(mapStateToProps, mapDispatchToProps)(UiModal)