import React, { useState } from 'react';
import MenuHoverChild from './MenuHoverChild'; // Import component con
import styles from './styles.module.scss'; // Import file CSS
import classNames from 'classnames/bind';
import MenuSpecial from './MenuSpecial';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
const MenuHoverParent = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className={cx('container')}>
      {data && data.map((item, index) => (
        <>
          <div
            className={hoveredId === index ? cx(['title', 'hovered']) : cx('title')}
            key={index}
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={item.path} className={cx('nav')}>
              <p>{item.title}</p>
              <span>{item.children && <MdKeyboardArrowDown />}</span>
            </Link>
            {item.title !== 'Mega Menu' && hoveredId === index && <MenuHoverChild data={item.children} />}
            {item.title === 'Mega Menu' && hoveredId === index && <MenuSpecial data={item} />}
          </div>
        </>
      ))}
    </div>
  );
};

export default MenuHoverParent;
