import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import data from './data'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from './Section/Section';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Category = () => {
  const settings = {
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  };
  const slider = React.useRef(null);
  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <div className={cx('text')}>
          <h2>Featured Categories</h2>
          <ul>
            <li>Cake & Milk</li>
            <li>Coffees & Teas</li>
            <li>Pets Foods</li>
            <li>Vegetables</li>
          </ul>
        </div>
        <div className={cx('slick-page')}>
          <button className={cx('btn')} onClick={() => slider?.current?.slickPrev()}>
            <IoIosArrowRoundBack className={cx('prev')} />
          </button>
          <button className={cx('btn')} onClick={() => slider?.current?.slickNext()}>
            <IoIosArrowRoundForward className={cx('next')} />
          </button>
        </div>

      </div>
      <Slider ref={slider} {...settings}>
        {data.map((item, index) => (
          <div key={index} className={cx('item', `${item.classNames}`)}>
            <div className={cx('main')}>
              <div className={cx('image')}>
                <img src={item.image} alt="" />
              </div>
              <div className={cx('content')}>
                <Link to={'/shop'}><h2>{item.name}</h2></Link>
                <p>{item.quantity} items</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Section />
    </div>
  )
}

export default Category