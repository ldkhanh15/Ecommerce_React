import React, { useState, useEffect } from 'react';
import './styles.css';

const Loading = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex % 5) + 1); // Lặp lại từ 1 đến 10
        }, 300); // Thay đổi hình ảnh mỗi giây

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, []);

    return (
        <div className="image-loader-container">
            <img
                src={`/images/cate/category-${currentIndex }.svg`}
            />
        </div>
    );
};

export default Loading;
