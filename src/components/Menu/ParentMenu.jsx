import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const ParentMenu = ({ closeModal, openMenu, setOpenMenu, menuData, className }) => {
    const isOpen = openMenu === menuData.title;
    const handleToggle = (e) => {
        e.preventDefault();
        setOpenMenu(isOpen ? null : menuData.title);
    };
    return (
        <>
            {menuData &&
                <  >
                    <Link to={menuData.path} className={className} >
                        {menuData.title}

                        {isOpen && menuData.children && menuData.children.map((menuItem, index) => (
                            <div><SubMenu key={index} item={menuItem} /></div>
                        ))}
                        <span onClick={(e)=>handleToggle(e)}><MdOutlineKeyboardArrowDown/></span>
                    </Link >
                </>
            }
        </>
    );
};

export default ParentMenu