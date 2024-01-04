import { FaLongArrowAltRight } from "react-icons/fa";

import React, { useRef, useState } from 'react'
import styles from './Category.module.scss'
import classNames from 'classnames/bind'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './data';
import CateCard from '@/components/CateCard';
import Button from '@/components/Button';
import { Link } from "react-router-dom";
import useWindowDimensions from "@/hooks/useWindowDimensions ";

const cx = classNames.bind(styles)

const Category = () => {

  const { width } = useWindowDimensions();
  let show = 6;
  // if(width < 1100 && width > 768){
  //   show=4
  // }else if(width <768){
  //   show=2
  // }
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    swipeToSlide: true,
  };

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        <h2>Category</h2>
        <span><Link to={'/product'}>All categories</Link></span>
      </div>
      <div className={cx('cate')} >
        <Slider {...settings} >
          {data.map((item, index) => (
            <CateCard key={index} data={item} />
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default Category