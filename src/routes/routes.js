//layout

import {AboutUs, Home, MyAccount, OrderTracking, WishList} from '../pages/pages'


//kể cả chưa login vẫn truy cập được
const publicRoutes = [
    {path:'/',component: Home},
    {path:'/about-us',component: AboutUs},
    {path:'/my-account',component: MyAccount},
    {path:'/wish-list',component: WishList},
    {path:'/order-tracking',component: OrderTracking},


    

]

//chỉ khi login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
