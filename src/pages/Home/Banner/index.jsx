import React, { useRef, useState } from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './fakedata'
import useWindowDimensions from '@/hooks/useWindowDimensions ';
const cx = classNames.bind(styles)
const Banner = () => {
  const {width} =useWindowDimensions();
  let show=3;
  if(width < 1100 && width > 768){
    show=2
  }else if(width <768){
    show=1
  }
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: show,
    autoplay:true,
    swipeToSlide:true
  };
  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <div className={cx('item')}>
          <img src="./1.jpg" alt="" />
        </div>
      </div>
      <div className={cx('slide')}>
        <Slider {...settings} >
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