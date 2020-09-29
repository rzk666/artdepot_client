// Initial State
import { INITIAL_STATE } from '../../../common/app-const';
// Action Types
import {
  ADMIN_IS_LOADING,
  ADMIN_HAS_ERROR,
} from './adminTypes';

const admin = (state = INITIAL_STATE.admin, action) => {
  switch (action.type) {
    case ADMIN_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
        hasError: false,
        error: '',
      };
    }
    case ADMIN_HAS_ERROR: {
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

export default admin;
