//layout

import {
    AboutUs,
    Home,
    MyAccount,
    OrderTracking,
    WishList,
    LoginBuy,
    Shop,
    Blog,
    Cart,
    CheckOut,
    Compare,
    Contact,
    LoginSell,
    RegisterBuy,
    RegisterSell,
    Settings,
    MyVoucher,
    ThankYou,
    DetailBlog,
} from '../pages/pages'



//kể cả chưa login vẫn truy cập được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/order-tracking', component: OrderTracking },
    { path: '/blog', component: Blog },
    { path: '/blog/:id', component: DetailBlog },
    { path: '/contact', component: Contact },
    { path: '/settings', component: Settings },
    
    //shop
    { path: '/shop/compare', component: Compare },
    { path: '/shop/cart', component: Cart },
    { path: '/shop/wish-list', component: WishList },
    { path: '/shop/check-out', component: CheckOut },
    { path: '/shop', component: Shop },
    
    //account
    { path: '/my-account', component: MyAccount },
    { path: '/my-account/my-voucher', component: MyVoucher },
    
    { path: '/thank-you', component: ThankYou },

    //login-register
    { path: '/seller/login', component: LoginSell },
    { path: '/seller/register', component: RegisterSell },

    { path: '/buyer/login', component: LoginBuy },
    { path: '/buyer/register', component: RegisterBuy },




]

//chỉ khi login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
