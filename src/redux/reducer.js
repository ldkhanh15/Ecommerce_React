import { REMOVE_PRODUCT, ADD_PRODUCT, ADD_CART, REMOVE_CART, ADD_COMPARE, REMOVE_COMPARE, ADD_WHITELIST, REMOVE_WHITELIST, ADD_USER, REMOVE_USER, UPDATE_CART, CLEAR_WHITELIST, CLEAR_COMPARE, CLEAR_CART, ADD_VOUCHER_PRODUCT, ADD_DELIVER, REMOVE_DELIVER, ADD_VOUCHER, REMOVE_VOUCHER, REMOVE_VOUCHER_PRODUCT, ADD_PAYMENT, REMOVE_PAYMENT, CLEAR_PRODUCT } from './action';

const initialState = {
  products: [],
  carts: [],
  whitelists: [],
  compares: [],
  user: {},
  voucher: {},
  deliver: {},
  payment: {}
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
    case CLEAR_PRODUCT:
      return {
        ...state,
        products: []
      }
    case ADD_VOUCHER_PRODUCT:
      let addVoucher = state.products.map(product => {
        if (product.id === action.payload.idProduct) {
          if (product.voucher) {
            if (product.voucher.id === action.payload.voucher.id) {
              return { ...product, voucher: null };
            } else {
              return { ...product, voucher: { ...action.payload.voucher } };
            }
          } else {

            return { ...product, voucher: { ...action.payload.voucher } };
          }
        }
        return product;
      });
      return {
        ...state,
        products: [...addVoucher]
      }
    case REMOVE_VOUCHER_PRODUCT:
      let removeVoucher = state.products.map(product => {
        if (product.id === action.payload.idProduct) {
          return { ...product, voucher: {} };
        }
        return product;
      });
      return {
        ...state,
        products: [...removeVoucher]
      }


    case ADD_CART:
      let check = state.carts.some((cart) => {
        return cart.id === action.payload.product.id;
      })
      if (check) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          carts: [...state.carts, action.payload.product],
        };
      }
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


    case ADD_DELIVER:

      return {
        ...state,
        deliver: { ...action.payload.item },
      };
    case REMOVE_DELIVER:
      return {
        ...state,
        deliver: {},
      };

    case ADD_PAYMENT:
      return {
        ...state,
        payment: { ...action.payload.item },
      };
    case REMOVE_PAYMENT:
      return {
        ...state,
        payment: {},
      };

    case ADD_VOUCHER:
      if(state.voucher.id===action.payload.voucher.id){
        return {
          ...state,
          voucher:{}
        }
      }
      return {
        ...state,
        voucher: { ...action.payload.voucher },
      };
    case REMOVE_VOUCHER:
      return {
        ...state,
        voucher: {},
      };

    default:
      return state;
  }
};

export default rootReducer;