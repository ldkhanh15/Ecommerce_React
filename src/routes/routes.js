//layout
import SellerLayout from '@/Layout/SellerLayout/SellerLayout'
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
    HotDeal,
    Customer,
    Account,
    Order,
    Overview,
    Products,
    Dashboard,
    SettingSell,
    Vouchers,
    AccountDetail,
    VoucherDetail,
    CustomerDetail,
    OrderDetail,
    ViewProduct,
    AddProduct,
    AddVoucher,
    Size,
    Banner,
    Payment,
    Category,
    BlogSeller,
    AddBlog,
    BlogSellerDetail,
    DeliverShop,
    Deliver
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
    { path: '/products/:id', component: ProductDetail },


    //shop
    { path: '/shop/compare', component: Compare },
    { path: '/shop/cart', component: Cart },
    { path: '/shop/wish-list', component: WishList },
    { path: '/shop/checkout', component: CheckOut },
    { path: '/shop/vendors', component: Vendor },
    { path: '/hot-deals', component: HotDeal },
    { path: '/shop/vendors/:id', component: VendorDetail },
    { path: '/shop', component: Shop },

    //account
    { path: '/my-account', component: MyAccount },
    { path: '/my-account/my-voucher', component: MyVoucher },

    { path: '/thank-you', component: ThankYou },

    //seller
    { path: '/seller/login', component: LoginSell },
    { path: '/seller/register', component: RegisterSell },
    { path: '/seller/customers', component: Customer, layout: SellerLayout },
    { path: '/seller/customers/:id', component: CustomerDetail, layout: SellerLayout },
    { path: '/seller/account', component: Account, layout: SellerLayout },
    { path: '/seller/account/:id', component: AccountDetail, layout: SellerLayout },
    { path: '/seller/orders', component: Order, layout: SellerLayout },
    { path: '/seller/orders/:id', component: OrderDetail, layout: SellerLayout },
    { path: '/seller/overviews', component: Overview, layout: SellerLayout },
    { path: '/seller/products', component: Products, layout: SellerLayout },
    { path: '/seller/products/:id', component: ViewProduct, layout: SellerLayout },
    { path: '/seller/products/add', component: AddProduct, layout: SellerLayout },
    { path: '/seller/settings', component: SettingSell, layout: SellerLayout },
    { path: '/seller/dashboard', component: Dashboard, layout: SellerLayout },
    { path: '/seller/vouchers', component: Vouchers, layout: SellerLayout },
    { path: '/seller/vouchers/:id', component: VoucherDetail, layout: SellerLayout },
    { path: '/seller/vouchers/add-voucher', component: AddVoucher, layout: SellerLayout },
    { path: '/seller/delivers/:id', component: DeliverShop, layout: SellerLayout },
    { path: '/seller/delivers', component: Deliver, layout: SellerLayout },
    { path: '/seller/size', component: Size, layout: SellerLayout },
    { path: '/seller/banner', component: Banner, layout: SellerLayout },
    { path: '/seller/payment', component: Payment, layout: SellerLayout },
    { path: '/seller/category', component: Category, layout: SellerLayout },
    { path: '/seller/blog', component: BlogSeller, layout: SellerLayout },
    { path: '/seller/blog/add-blog', component: AddBlog, layout: SellerLayout },
    { path: '/seller/blog/:id', component: BlogSellerDetail, layout: SellerLayout },

    //buyer
    { path: '/buyer/login', component: LoginBuy },
    { path: '/buyer/register', component: RegisterBuy },




]

//chỉ khi login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
