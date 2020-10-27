// Types
import {
  USERS_IS_LOADING,
  USERS_HAS_ERROR,
  GET_USERS,
} from './usersTypes';
// API
import { API } from '../../api';
// Additional Imports
import config from '../../../common/config';

export const getUsers = (data) => ({
  type: GET_USERS,
  data,
});

export const usersIsLoading = (isLoading) => ({
  type: USERS_IS_LOADING,
  isLoading,
});

export const usersHasError = (error) => ({
  type: USERS_HAS_ERROR,
  error,
});

export const fetchUsers = (data) => (({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: '/users',
    },
    method: 'get',
    data,
    success: (data) => getUsers(data),
    failure: (data) => usersHasError(data),
    loader: (data) => usersIsLoading(data),
  },
}));
