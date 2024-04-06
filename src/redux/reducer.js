import { REMOVE_PRODUCT, ADD_PRODUCT, ADD_CART, REMOVE_CART, ADD_COMPARE, REMOVE_COMPARE, ADD_WHITELIST, REMOVE_WHITELIST, ADD_USER, REMOVE_USER, UPDATE_CART, CLEAR_WHITELIST, CLEAR_COMPARE, CLEAR_CART } from './action';

const initialState = {
  products: [],
  carts: [],
  whitelists: [],
  compares: [],
  user: {},

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {}
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id),
      };

    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload.product],
      };
    case REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter((product) => product.id !== action.payload.id),
      };
    case UPDATE_CART:
      let updatedCarts = state.carts.map(cart => {
        if (cart.id === action.payload.id) {
          return { ...cart, quantity: action.payload.quantity };
        }
        return cart;
      });
      let updatedProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: action.payload.quantity };
        }
        return product;
      });

      return {
        ...state,
        carts: [...updatedCarts],
        products: [...updatedProducts]
      }
    case CLEAR_CART:
      return {
        ...state,
        carts: []
      };



    case ADD_COMPARE:
      return {
        ...state,
        compares: [...state.compares, action.payload.product],
      };
    case REMOVE_COMPARE:
      return {
        ...state,
        compares: state.compares.filter((product) => product.id !== action.payload.id),
      };
    case CLEAR_COMPARE:
      return {
        ...state,
        compares: []
      };

    case ADD_WHITELIST:
      return {
        ...state,
        whitelists: [...state.whitelists, action.payload.product],
      };
    case REMOVE_WHITELIST:
      return {
        ...state,
        whitelists: state.whitelists.filter((product) => product.id !== action.payload.id),
      };
    case CLEAR_WHITELIST:
      return {
        ...state,
        whitelists: []
      };

    default:
      return state;
  }
};

export default rootReducer;