import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Product from '@/components/Product/Product';
import data from './data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from '@/components/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
const cx = classNames.bind(styles);
const BestSale = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
    ]
  };
  const slider = React.useRef(null);
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3>Daily Best Sells</h3>
        <ul>
          <li className={cx('active')}>Featured</li>
          <li>Popular</li>
          <li>New added</li>
        </ul>
      </div>
      <div className={cx('content')}>
        <div className={cx('banner')}>
          <h2>Bring nature intro your home</h2>
          <Button className={cx('btn')} medium rightIcon={<IoIosArrowRoundForward />} rounded>Shop now</Button>
        </div>
        <div className={cx('product')}>
          <div className={cx('slick-page')}>
            <button className={cx('btn')} onClick={() => slider?.current?.slickPrev()}>
              <IoIosArrowRoundBack className={cx('prev')} />
            </button>
            <button className={cx('btn')} onClick={() => slider?.current?.slickNext()}>
              <IoIosArrowRoundForward className={cx('next')} />
            </button>
          </div>
          <Slider ref={slider} {...settings}>

            {data && data.map((item) => (
              <Product className={cx('item')} key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BestSale