import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import InputLetter from '@/components/InputLetter/InputLetter';
import { getBanner } from '@/services/bannerService';
const cx = classNames.bind(styles);
const Banner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getBanner("true");
      setData(res.data);
    }
    getData();
  }, [])
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => (
      <div className={cx('dots-slick-banner')} key={i}>

      </div>
    ),
  };

  return (
    <div className={cx('container')}>
      <Slider  {...settings}>
        {data && data.map((item, index) => (
          <div key={index} className={cx('slide')}>
            <img src={item.image} alt="" />
            <div className={cx('content')}>
              <h1>{item.title}</h1>
              <p>{item.subTitle}</p>
              <InputLetter />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner