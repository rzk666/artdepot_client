// Initial State
import { INITIAL_STATE } from '../../../common/app-const';
// Action Types
import {
  ORDERS_IS_LOADING,
  ORDERS_HAS_ERROR,
  GET_ORDERS,
} from './ordersTypes';

const orders = (state = INITIAL_STATE.products, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      const { data } = action.data;
      return {
        ...state,
        data,
      };
    }
    case ORDERS_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case ORDERS_HAS_ERROR: {
      if (!action.error) {
        return {
          ...state,
          hasError: action.error,
          errorCode: -1,
          isLoading: false,
        };
      }
      return {
        ...state,
        hasError: true,
        errorCode: `e${action.error}`,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default orders;
