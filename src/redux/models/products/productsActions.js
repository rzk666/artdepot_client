// Types
import {
  PRODUCTS_IS_LOADING,
  GET_PRODUCTS,
  PRODUCTS_HAS_ERROR,
} from './productsTypes';
// API
import { API } from '../../api';
// Additional Imports
import config from '../../../common/config';

export const getProducts = (data) => ({
  type: GET_PRODUCTS,
  data,
});

export const productsIsLoading = (isLoading) => ({
  type: PRODUCTS_IS_LOADING,
  isLoading,
});

export const productsHasError = (error) => ({
  type: PRODUCTS_HAS_ERROR,
  error,
});

export const fetchProductsByIndex = (index) => (({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: `/products/index=${index}`,
    },
    method: 'get',
    success: (data) => getProducts(data),
    failure: (data) => productsHasError(data),
    loader: (data) => productsIsLoading(data),
  },
}));

export const fetchProductsByCategory = (categoryId) => (({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: `/variations/category/${categoryId}`,
    },
    method: 'get',
    success: (data) => getProducts(data),
    failure: (data) => productsHasError(data),
    loader: (data) => productsIsLoading(data),
  },
}));

export const fetchProductsBySearch = (search) => (({
  type: API,
  payload: {
    url: {
      base: config.api.url,
      endpoint: `/variations/search?query=${search}`,
    },
    method: 'get',
    success: (data) => getProducts(data),
    failure: (data) => productsHasError(data),
    loader: (data) => productsIsLoading(data),
  },
}));