import React, { useRef, useState } from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './fakedata'
const cx = classNames.bind(styles)
const Banner = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <div className={cx('item')}>
          <img src="./1.jpg" alt="" />
        </div>
      </div>
      <div className={cx('slide')}>
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index} className={cx('item')}>
              <img src={data.cover} alt={data.title} />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default Banner