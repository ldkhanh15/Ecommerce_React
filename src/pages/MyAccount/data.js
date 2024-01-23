import { CiLocationOn, CiSettings } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const data=[
    {
        icon:<CiSettings/>,
        title:'Dashboard'
    },
    {
        icon:<AiOutlineShopping />,
        title:'Orders'
    },
    {
        icon:<BsCartCheck/>,
        title:'Track Your Order'
    },
    {
        icon:<CiLocationOn/>,
        title:'My Address'
    },
    {
        icon:<FiUser/>,
        title:'Account Details'
    },
    {
        icon:<MdLogout/>,
        title:'Logout'
    }
]
export default data;