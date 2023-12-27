//layout
import AccountLayout from '@/Layout/AccountLayout';
import CartLayout from '@/Layout/CartLayout';
import SpecialLayout from '@/Layout/SpecialLayout';

import About from '@/pages/About';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Contact from '@/pages/Contact';
import FlashSale from '@/pages/FlashSale';
import HelpCenter from '@/pages/HelpCenter';

import Home from '@/pages/Home';
import PrivatePolicy from '@/pages/PrivatePolicy';
import Product from '@/pages/Product';
import DetailProduct from '@/pages/Product/DetailProduct';
import ProductVoucher from '@/pages/Product/ProductVoucher';
import Search from '@/pages/Search';
import SiteMap from '@/pages/SiteMap';
import ThankYou from '@/pages/ThankYou';
import Address from '@/pages/User/Account/Address';
import ChangPassword from '@/pages/User/Account/ChangePassword';
import Profile from '@/pages/User/Account/Profile';
import Purchase from '@/pages/User/Purchase';
import DetailPurchase from '@/pages/User/Purchase/DetailPurchase';
import VoucherStore from '@/pages/User/VoucherStore';
import DetailVoucher from '@/pages/User/VoucherStore/DetailVoucher';
import LoginSeller from '@/pages/Seller/Login';
import SignUpSeller from '@/pages/Seller/Signup';
import LoginBuyer from '@/pages/Buyer/Login';
import SignUpBuyer from '@/pages/Buyer/Signup/login';

//kể cả chưa login vẫn truy cập được
const publicRoutes = [
    { path: '/', component: Home },

    //product
    { path: '/product', component: Product },
    { path: '/product/voucher/:id', component: ProductVoucher },
    { path: '/product/:id', component: DetailProduct },
    
    { path: '/search', component: Search },


    //user
    { path: '/user/account/profile', component: Profile,layout:AccountLayout},
    { path: '/user/account/address', component: Address,layout:AccountLayout},
    { path: '/user/account/password', component: ChangPassword,layout:AccountLayout},
    
    { path: '/user/purchase/:type', component: DetailPurchase,layout:AccountLayout},
    { path: '/user/purchase', component: Purchase,layout:AccountLayout},
    { path: '/user/voucher/:type', component: DetailVoucher,layout:AccountLayout},
    { path: '/user/voucher', component: VoucherStore,layout:AccountLayout},

    //cart
    { path: '/cart', component: Cart,layout:CartLayout},
    { path: '/checkout', component: Checkout,layout:CartLayout},
    { path: '/thank-you', component: ThankYou,layout:CartLayout},
    

    { path: '/flash-sale/:timeId/:cateId', component: FlashSale},
    
    //customer service
    { path: '/contact-us', component: Contact, layout: SpecialLayout },
    { path: '/help-center', component: HelpCenter,layout:SpecialLayout},
    { path: '/site-map', component: SiteMap,layout:SpecialLayout},
    { path: '/private-policy', component: PrivatePolicy,layout:SpecialLayout},
    
    //about shop
    { path: '/about-us', component: About,layout:SpecialLayout},
    
    //login-signup-buyer
    { path: '/buyer/login', component: LoginBuyer,layout:SpecialLayout},
    { path: '/buyer/sign-up', component: SignUpBuyer,layout:SpecialLayout},
   
   
    { path: '/seller/login', component: LoginSeller,layout:SpecialLayout},
    { path: '/seller/sign-up', component: SignUpSeller,layout:SpecialLayout},
    

]

//chỉ khi login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
