// Initial State
import { INITIAL_STATE } from '../../../common/app-const';
// Action Types
import {
  AUTHLOGIN,
  AUTH_HAS_ERROR,
  AUTH_IS_LOADING,
} from './authTypes';

const auth = (state = INITIAL_STATE.auth, action) => {
  switch (action.type) {
    case AUTHLOGIN: {
      const { data } = action.data;
      const { token, user } = data;
      return {
        ...state,
        token,
        user,
        isLoading: false,
        loggedIn: !!token,
      };
    }
    case AUTH_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case AUTH_HAS_ERROR: {
      const { error } = action;
      if (!error) {
        return {
          ...state,
          hasError: false,
          error: '',
          isLoading: false,
        };
      }
      return {
        ...state,
        hasError: true,
        error,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
