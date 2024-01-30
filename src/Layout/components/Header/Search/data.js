import { BiHeart } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdLogout, MdOutlineLocationOn } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
const data = [
    {
        icon: <FiUser />,
        title: 'My Account',
        path:'/my-account'
    },
    {
        icon: <MdOutlineLocationOn />,
        title: 'Order Tracking',
        path:'/my-account'
    },
    {
        icon: <RiHome4Line />,
        title: 'My Voucher',
        path:'/my-account/my-voucher'
    },
    {
        icon: <BiHeart />,
        title: 'My WishList',
        path:'/shop/wish-list'
    },
    {
        icon: <CiSettings />,
        title: 'Settings',
        path:'/settings'

    },
    {
        icon: <MdLogout />,
        title: 'Sign out'
    }
]
export default data;