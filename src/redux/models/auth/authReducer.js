// Initial State
import { INITIAL_STATE } from '../../../common/app-const';
// Action Types
import {
  PRODUCTS_IS_LOADING,
  PRODUCTS_HAS_ERROR,
  GET_PRODUCTS,
} from './productsTypes';

const products = (state = INITIAL_STATE.products, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      const { data } = action.data;
      return {
        ...state,
        data,
      };
    }
    case PRODUCTS_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case PRODUCTS_HAS_ERROR: {
      if (!action.error) {
        return {
          ...state,
          hasError : action.error,
          errorCode: -1,
          isLoading: false,
        };
      }
      return {
        ...state,
        hasError : true,
        errorCode: `e${action.error}`,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
