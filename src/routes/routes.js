//layout

import Blog from '@/pages/Blog/Blog'
import LoginBuy from '@/pages/Buyer/LoginBuy/LoginBuy'
import RegisterBuy from '@/pages/Buyer/RegisterBuy/RegisterBuy'
import Cart from '@/pages/Cart/Cart'
import Compare from '@/pages/Compare/Compare'
import Contact from '@/pages/Contact/Contact'
import LoginSell from '@/pages/Seller/LoginSell/LoginSell'
import RegisterSell from '@/pages/Seller/RegisterSell/RegisterSell'
import {AboutUs, Home, MyAccount, OrderTracking, WishList,} from '../pages/pages'


//kể cả chưa login vẫn truy cập được
const publicRoutes = [
    {path:'/',component: Home},
    {path:'/about-us',component: AboutUs},
    {path:'/my-account',component: MyAccount},
    {path:'/wish-list',component: WishList},
    {path:'/order-tracking',component: OrderTracking},
    {path:'/blog',component: Blog},
    {path:'/contact',component: Contact},
    
    //product
    {path:'/compare',component: Compare},
    {path:'/cart',component: Cart},




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
