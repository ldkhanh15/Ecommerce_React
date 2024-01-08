import React from 'react';
import MenuHoverChildChild from './MenuHoverChildChild';
import styles from './styles.module.scss'; // Import file CSS
import classNames from 'classnames/bind';
import { IoIosArrowForward } from "react-icons/io";
const cx = classNames.bind(styles)
const MenuHoverChild = ({ data }) => {
  return (
    <>
      {data && <div className={cx('childDiv')}>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.title}
              {item.children && <MenuHoverChildChild data={item.children} />}
              {item.children &&
                <span className={cx('icon')}>
                  <IoIosArrowForward />
                </span>
              }
            </li>

          ))}
        </ul>
      </div>}
    </>
  );
};

export default MenuHoverChild;
