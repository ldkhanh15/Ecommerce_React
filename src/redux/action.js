export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_VOUCHER_PRODUCT = 'ADD_VOUCHER_PRODUCT'
export const REMOVE_VOUCHER_PRODUCT = 'REMOVE VOUCHER_PRODUCT'
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT'


export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_CART = 'UPDATE_CART'

export const ADD_COMPARE = 'ADD_COMPARE';
export const REMOVE_COMPARE = 'REMOVE_COMPARE'
export const CLEAR_COMPARE = 'CLEAR_COMPARE'

export const ADD_WHITELIST = 'ADD_WHITELIST';
export const REMOVE_WHITELIST = 'REMOVE_WHITELIST'
export const CLEAR_WHITELIST = 'CLEAR_WHITELIST'

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER'

export const ADD_PAYMENT = 'ADD_PAYMENT'
export const REMOVE_PAYMENT = 'REMOVE_PAYMENT'

export const ADD_DELIVER = 'ADD_DELIVER'
export const REMOVE_DELIVER = 'REMOVE_DELIVER'

export const ADD_VOUCHER = 'ADD_VOUCHER'
export const REMOVE_VOUCHER = 'REMOVE_VOUCHER'



export const addUser = (user) => ({
    type: ADD_USER,
    payload: { user },
});

export const removeUser = () => ({
    type: REMOVE_USER,
});


export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: { product },
});

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: { id },
});

export const addVoucherProduct = (voucher, idProduct) => ({
    type: ADD_VOUCHER_PRODUCT,
    payload: { voucher, idProduct },
});

export const removeVoucherProduct = (voucher, idProduct) => ({
    type: REMOVE_VOUCHER_PRODUCT,
    payload: { voucher, idProduct },
});
export const clearProduct = () => ({
    type: CLEAR_PRODUCT
})

export const addCart = (product) => ({
    type: ADD_CART,
    payload: { product },
});

export const updateCart = ({ id, quantity }) => ({
    type: UPDATE_CART,
    payload: { id, quantity },
})

export const removeCart = (id) => ({
    type: REMOVE_CART,
    payload: { id },
});
export const clearCart = () => ({
    type: CLEAR_CART,
});


export const addCompare = (product) => ({
    type: ADD_COMPARE,
    payload: { product },
});

export const removeCompare = (id) => ({
    type: REMOVE_COMPARE,
    payload: { id },
});
export const clearCompare = () => ({
    type: CLEAR_COMPARE,
});

export const addWhiteList = (product) => ({
    type: ADD_WHITELIST,
    payload: { product },
});

export const removeWhiteList = (id) => ({
    type: REMOVE_WHITELIST,
    payload: { id },
});
export const clearWhiteList = () => ({
    type: CLEAR_WHITELIST,
});


export const addDeliver = (item) => ({
    type: ADD_DELIVER,
    payload: { item },
});

export const removeDeliver = () => ({
    type: REMOVE_DELIVER,
});

export const addVoucher = (voucher) => ({
    type: ADD_VOUCHER,
    payload: { voucher },
});

export const removeVoucher = () => ({
    type: REMOVE_VOUCHER,
});

export const addPayment = (item) => ({
    type: ADD_PAYMENT,
    payload: { item },
});

export const removePayment = () => ({
    type: REMOVE_PAYMENT,
});
