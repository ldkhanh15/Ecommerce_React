import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import InputLetter from '@/components/InputLetter/InputLetter';
const cx = classNames.bind(styles);
const Banner = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className={cx('dots-slick')} key={i}>
        
      </div>
    ),
  };

  return (
    <div className={cx('container')}>
      <Slider  {...settings}>
        <div className={cx('slide')}>
          <img src="/slider-1.png" alt="" />
          <div className={cx('content')}>
            <h1>Don’t miss amazing <br /> grocery deals</h1>
            <p>Sign up for the daily newsletter</p>
            <InputLetter />
          </div>
        </div>
        <div className={cx('slide')}>
          <img src="/slider-2.png" alt="" />
          <div className={cx('content')}>
            <h1>Fresh Vegetables <br /> Big discount</h1>
            <p>Save up to 50% off on your first order</p>
            <InputLetter />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Banner