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
  
  export const fetchProducts = (data) => (({
    type   : API,
    payload: {
      url: {
        base    : config.api.url,
        endpoint: '/auth/login/google',
      },
      method : 'post',
      data,
      success: (data) => getProducts(data),
      failure: (data) => productsHasError(data),
      loader : (data) => productsIsLoading(data),
    },
  }));
  