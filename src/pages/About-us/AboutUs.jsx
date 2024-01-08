import MenuHoverParent from '@/components/MenuHover/MenuHoveParent';
import React, { useState } from 'react';
import './AboutUs.css'; // Tên file CSS của bạn


const AboutUs = () => {
  const data = [
    { id: 1, content: 'Thẻ cha 1', childContent: 'Nội dung thẻ con 1' },
    { id: 2, content: 'Thẻ cha 2', childContent: 'Nội dung thẻ con 2' },
    { id: 3, content: 'Thẻ cha 3', childContent: 'Nội dung thẻ con 3' },
    // ...Thêm thêm dữ liệu nếu cần
  ];


  return (
    <MenuHoverParent data={data}/>
  );
};

export default AboutUs;
