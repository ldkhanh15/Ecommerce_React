const nav = [
    {
        title: 'Home',
        path: '/',
        children: [
            {
                title: 'Home1',
                path: '/'
            },
            {
                title: 'Home2',
                path: '/'
            },
            {
                title: 'Home3',
                path: '/'
            },
            {
                title: 'Home4',
                path: '/'
            },
        ]
    },
    {
        title: 'About',
        path: '/about-us'
    },
    {
        title: 'Shop',
        path: '/shop',
        children: [
            {
                title: 'Shop Grid – Right Sidebar',
                path: '/shop'
            },
            {
                title: 'Shop Grid – Left Sidebar',
                path: '/shop'
            },
            {
                title: 'Shop List – Right Sidebar',
                path: '/shop'
            },
            {
                title: 'Shop List – Left Sidebar',
                path: '/shop'
            },
            {
                title: 'Shop - Wide',
                path: '/shop'
            },
            {
                title: 'Shop - Filter',
                path: '/shop'
            },
            {
                title: 'Shop - WishList',
                path: '/shop/wish-list'
            },
            {
                title: 'Shop - Cart',
                path: '/shop/cart'
            },
            {
                title: 'Shop - Checkout',
                path: '/shop/checkout'
            },
            {
                title: 'Shop - Compare',
                path: '/shop/compare'
            },
            {
                title:'Shop - Vendor',
                path:'/shop/vendors'
            }
        ]
    },
    {
        title: 'Mega Menu',
        path: '/mega-menu',
        list: [
            {
                title: 'Fruit & Vegetables',
                path: '/',
                children: [
                    {
                        title: 'Meat & Poultry',
                        path: '/'
                    },
                    {
                        title: 'Fresh Vegetables',
                        path: '/'
                    },
                    {
                        title: 'Herbs & Seasonings',
                        path: '/'
                    },
                    {
                        title: 'Cuts & Sprouts',
                        path: '/'
                    },
                    {
                        title: 'Exotic Fruit & Veggies',
                        path: '/'
                    },
                    {
                        title: 'Packaged Produce',
                        path: '/'
                    },
                ]
            },
            {
                title: 'Breakfast & Daily',
                path: '/',
                children: [
                    {
                        title: 'Milk & Flavoured Milk',
                        path: '/'
                    },
                    {
                        title: 'Butter and Margarine',
                        path: '/',
                    },
                    {
                        title: 'Eggs Substitutes',
                        path: '/',
                    },
                    {
                        title: 'Marmalades',
                        path: '/',
                    },
                    {
                        title: 'Sour Cream',
                        path: '/',
                    },
                    {
                        title: 'Cheese',
                        path: '/',
                    },
                ]
            },
            {
                title: 'Meat & Seafood',
                path: '/',
                children: [
                    {
                        title: 'Breakfast Sausage',
                        path: '/'
                    },
                    {
                        title: 'Dinner Sausage',
                        path: '/'
                    },
                    {
                        title: 'Chicken',
                        path: '/'
                    },
                    {
                        title: 'Sliced Deli Meat',
                        path: '/'
                    },
                    {
                        title: 'Wild Caught Fillets',
                        path: '/'
                    },
                    {
                        title: 'Crab and Shellfish',
                        path: '/'
                    },
                ]
            }
        ],
        image: {
            link: '/images/banner/banner-menu.png',
            sale: '25'
        }
    },
    {
        title: 'Blog',
        path: '/blog',
        children: [
            {
                title: 'Blog Category Gird',
                path: '/blog'
            },
            {
                title: 'Blog Category List',
                path: '/blog'
            },
            {
                title: 'Blog Category Big',
                path: '/blog'
            },
            {
                title: 'Blog Category Wide',
                path: '/blog'
            },
            {
                title: 'Single Product Layout',
                path: '/blog',
                children: [
                    {
                        title: 'Left SideBar',
                        path: '/blog'
                    },
                    {
                        title: 'Right SideBar',
                        path: '/blog'
                    },
                    {
                        title: 'No SideBar',
                        path: '/blog'
                    },
                ]
            },
        ]
    },
    {
        title: 'Pages',
        path: '/',
        children: [
            {
                title: 'About Us',
                path: '/about-us'
            },
            {
                title: 'Contact',
                path: '/contact'
            },
            {
                title: 'My Account',
                path: '/my-account'
            },
            {
                title: 'Login',
                path: '/buyer/login'
            },
            {
                title: 'Register',
                path: '/buyer/register'
            },
            {
                title: 'Purchase Guide',
                path: '/purchase-guide'
            },
            {
                title: 'Privacy Policy',
                path: '/privacy-policy'
            },
            {
                title: 'Terms Of Service',
                path: '/terms-of-service'
            },
            {
                title: '404 Page',
                path: '/404-page'
            },
        ]
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]
const cate = [
    {
        title:'Milks & Dairies',
        image:'/images/cate/category-1.svg'
    },
    {
        title:'Clothing',
        image:'/images/cate/category-2.svg'
    },
    {
        title:'Pet Foods',
        image:'/images/cate/category-3.svg'
    },
    {
        title:'Baking material',
        image:'/images/cate/category-4.svg'
    },
    {
        title:'Fresh Fruit',
        image:'/images/cate/category-5.svg'
    },
    {
        title:'Milks & Dairies',
        image:'/images/cate/category-1.svg'
    },
    {
        title:'Clothing',
        image:'/images/cate/category-2.svg'
    },
    {
        title:'Pet Foods',
        image:'/images/cate/category-3.svg'
    },
    {
        title:'Baking material',
        image:'/images/cate/category-4.svg'
    },
    {
        title:'Fresh Fruit',
        image:'/images/cate/category-5.svg'
    },
]
export { nav, cate }