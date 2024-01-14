import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const Countdown = () => {
  const targetTime = new Date();
  targetTime.setSeconds(targetTime.getSeconds() + 10);
  targetTime.setHours(targetTime.getHours() + 10);

  const calculateTimeLeft = () => {
    const difference = new Date(targetTime) - new Date();
    let timeLeft = {};

    if (difference >= 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      // Nếu thời gian đã hết, đặt tất cả giá trị thành 0 và đánh dấu là đã kết thúc
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer;

    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsFinished(true);
        clearInterval(timer); // Dừng interval khi thời gian đã hết
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft(newTimeLeft);
      }
    };

    if (!isFinished) {
      timer = setInterval(updateTimer, 1000);
      updateTimer(); // Gọi ngay một lần khi mount component để tránh hiển thị giá trị ban đầu có thể là 0
    }

    return () => clearInterval(timer);
  }, [isFinished]);

  return (
        <div className={cx('container')}>
          <div className={cx('box')}>
            <span>{timeLeft.days}</span> 
            <span className={cx('text')}>Days</span>
          </div>
          <div className={cx('box')}>
            <span>{timeLeft.hours}</span> 
            <span className={cx('text')}>Hours</span>
          </div>
          <div className={cx('box')}>
            <span>{timeLeft.minutes}</span> 
            <span className={cx('text')}>Mins</span>
          </div>
          <div className={cx('box')}>
            <span>{timeLeft.seconds}</span>
            <span className={cx('text')}>Sec</span>
          </div>
        </div>
  );
};

export default Countdown;
