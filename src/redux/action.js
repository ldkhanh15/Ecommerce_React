export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

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
