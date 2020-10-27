// Initial State
import { INITIAL_STATE } from '../../../common/app-const';
// Action Types
import {
  USERS_IS_LOADING,
  USERS_HAS_ERROR,
  GET_USERS,
} from './usersTypes';

const users = (state = INITIAL_STATE.products, action) => {
  switch (action.type) {
    case GET_USERS: {
      const { data } = action.data;
      return {
        ...state,
        data,
      };
    }
    case USERS_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case USERS_HAS_ERROR: {
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

export default users;
