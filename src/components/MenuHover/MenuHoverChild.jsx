import React from 'react';
import MenuHoverChildChild from './MenuHoverChildChild';
import styles from './styles.module.scss'; // Import file CSS
import classNames from 'classnames/bind';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
const MenuHoverChild = ({ data }) => {
  return (
    <>
      {data && <div className={cx('childDiv')}>
        <ul>
          {data.map((item, index) => (
            <Link key={index} to={item.path}>
              <li >
                {item.title}
                {item.children && <MenuHoverChildChild data={item.children} />}
                {item.children &&
                  <span className={cx('icon')}>
                    <IoIosArrowForward />
                  </span>
                }
              </li>
            </Link>

          ))}
        </ul>
      </div>}
    </>
  );
};

export default MenuHoverChild;
