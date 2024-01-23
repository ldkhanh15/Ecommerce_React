import { BiHeart } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdLogout, MdOutlineLocationOn } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
const data = [
    {
        icon: <FiUser />,
        title: 'My Account'
    },
    {
        icon: <MdOutlineLocationOn />,
        title: 'Order Tracking'
    },
    {
        icon: <RiHome4Line />,
        title: 'My Voucher'
    },
    {
        icon: <BiHeart />,
        title: 'My WishList'
    },
    {
        icon: <CiSettings />,
        title: 'Settings'
    },
    {
        icon: <MdLogout />,
        title: 'Sign out'
    }
]
export default data;