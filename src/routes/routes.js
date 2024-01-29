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
    ProductDetail,
    Vendor,
    VendorDetail,
    PurchaseGuide,
    Privacy,
    TermService,
    NotFound,
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
    { path: '/purchase-guide', component: PurchaseGuide },
    { path: '/privacy-policy', component: Privacy },
    { path: '/terms-of-service', component: TermService },
    { path: '/404-page', component: NotFound },
    
    //product
    { path: '/products/:name', component: ProductDetail },


    //shop
    { path: '/shop/compare', component: Compare },
    { path: '/shop/cart', component: Cart },
    { path: '/shop/wish-list', component: WishList },
    { path: '/shop/checkout', component: CheckOut },
    { path: '/shop/vendors', component: Vendor },
    { path: '/shop/vendors/:id', component: VendorDetail },
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
