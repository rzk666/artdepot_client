// Types
import {
  ORDERS_IS_LOADING,
  GET_ORDERS,
  ORDERS_HAS_ERROR,
} from './ordersTypes';
// API
import { API } from '../../api';
// Additional Imports
import config from '../../../common/config';

export const getOrders = (data) => ({
  type: GET_ORDERS,
  data,
});

export const ordersIsLoading = (isLoading) => ({
  type: ORDERS_IS_LOADING,
  isLoading,
});

export const ordersHasError = (error) => ({
  type: ORDERS_HAS_ERROR,
  error,
});

export const fetchOrders = (type, data) => (({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: `/orders/options?${type}=${data}`,
    },
    method: 'get',
    data,
    success: (data) => getOrders(data),
    failure: (data) => ordersHasError(data),
    loader: (data) => ordersIsLoading(data),
  },
}));
