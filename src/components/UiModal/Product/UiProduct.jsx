import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '../../Button';
import { FaRandom, FaRegHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const cx = classNames.bind(styles)
const UiModal = ({ data, modal }) => {
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
                            <div style={{ width: `${4 * 100 / 5}%` }} className={cx('star')}>

                            </div>
                        </div>
                        <div className={cx('count')}>
                            (32 reviews)
                        </div>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('new-price')}>
                            $238.25
                        </div>
                        <div className={cx('old-price')}>
                            <div className={cx('sale')}>
                                14% Off
                            </div>
                            <div className={cx('old')}>
                                $245.5
                            </div>
                        </div>
                    </div>
                    {
                        !modal && <div className={cx('desc')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
                        </div>
                    }
                    <div className={cx('color')}>
                        <h3 className={cx('title')}>Color</h3>

                        <div className={cx('item-color')}>

                        </div>
                        <div className={cx('item-color')}>

                        </div>
                        <div className={cx('item-color')}>

                        </div>
                        <div className={cx('item-color')}>

                        </div>
                        <div className={cx('item-color')}>

                        </div>
                        <div className={cx('item-color')}>

                        </div>
                    </div>
                    <div className={cx('box')}>
                        <h3 className={cx('title')}>Size</h3>

                        <div className={cx(['item-box', 'active'])}>
                            M
                        </div>
                        <div className={cx('item-box')}>
                            L
                        </div>
                        <div className={cx('item-box')}>
                            XL
                        </div>
                        <div className={cx('item-box')}>
                            XXL
                        </div>
                    </div>
                    {data.combo && <div className={cx('box')}>

                        <h3 className={cx('title')}>Combo</h3>
                        {

                            data.combo && data.combo.map((item, index) => (
                                <div className={cx(['item-box', 'active'])}>
                                    {
                                        item.name
                                    }
                                </div>

                            ))

                        }
                    </div>}
                    <div className={cx('action')}>
                        <input defaultValue={1} min={1} type="number" />
                        <Button rounded className={cx('btn')}>Add to Cart</Button>
                        <div className={cx('icon')}>
                            <FaRegHeart />
                        </div>
                        <div className={cx('icon')}>
                            <FaRandom />
                        </div>
                    </div>
                    <div className={cx('more')}>
                        <div className={cx('item')}>
                            SKU: <span>{data.id}</span>
                        </div>
                        <div className={cx('item')}>
                            Tag: <span>Cloth</span>
                        </div>
                        <div className={cx('item')}>
                            Available: <span>{data.detailProduct.quantity} items in Stock</span>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default UiModal