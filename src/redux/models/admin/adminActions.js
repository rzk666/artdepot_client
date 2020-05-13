/* eslint-disable no-shadow */
// Types
import {
  ADMIN_HAS_ERROR,
  ADMIN_IS_LOADING,
} from './adminTypes';
// API
import { API } from '../../api';
// Additional Imports
import config from '../../../common/config';

// ----- Common ----- //
export const adminIsLoading = (isLoading) => ({
  type: ADMIN_IS_LOADING,
  isLoading,
});

export const adminHasError = (error) => ({
  type: ADMIN_HAS_ERROR,
  error,
});

// ----- Users ----- //
export const addUser = (data) => ({
  type: API,
  payload: {
    url: {
      base: config.api.admin,
      endpoint: '/user/new',
    },
    method: 'post',
    data,
    success: (data) => adminIsLoading(!!data),
    failure: (data) => adminHasError(data),
    loader: (data) => adminIsLoading(data),
  },
});
