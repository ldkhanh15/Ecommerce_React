//layout

import Blog from '@/pages/Blog/Blog'
import LoginBuy from '@/pages/Buyer/LoginBuy/LoginBuy'
import RegisterBuy from '@/pages/Buyer/RegisterBuy/RegisterBuy'
import Cart from '@/pages/Shop/Cart/Cart'
import Compare from '@/pages/Shop/Compare/Compare'
import Contact from '@/pages/Contact/Contact'
import LoginSell from '@/pages/Seller/LoginSell/LoginSell'
import RegisterSell from '@/pages/Seller/RegisterSell/RegisterSell'
import {AboutUs, Home, MyAccount, OrderTracking, WishList,} from '../pages/pages'
import CheckOut from '@/pages/Shop/CheckOut/CheckOut'
import Shop from '@/pages/Shop/Shop'


//kể cả chưa login vẫn truy cập được
const publicRoutes = [
    {path:'/',component: Home},
    {path:'/about-us',component: AboutUs},
    {path:'/my-account',component: MyAccount},
    {path:'/order-tracking',component: OrderTracking},
    {path:'/blog',component: Blog},
    {path:'/contact',component: Contact},
    
    //product
    {path:'/shop/compare',component: Compare},
    {path:'/shop/cart',component: Cart},
    {path:'/shop/wish-list',component: WishList},
    {path:'/shop/check-out',component: CheckOut},
    {path:'/shop',component: Shop},




    //account
    {path:'/seller/login',component:LoginSell },
    {path:'/seller/register',component:RegisterSell },
    
    {path:'/buyer/login',component:LoginBuy },
    {path:'/buyer/register',component:RegisterBuy },


    

]

//chỉ khi login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
