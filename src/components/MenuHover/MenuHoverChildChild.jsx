import React from 'react';
import styles from './styles.module.scss'; // Import file CSS
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)
const MenuHoverChildChild = ({ data }) => {
  return (
    <div className={cx('childChildDiv')}>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuHoverChildChild;
