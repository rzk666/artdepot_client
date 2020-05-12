export const INITIAL_STATE = {
  products: {
    isLoading: true,
    hasError : false,
    errorCode: -1,
    data     : [],
  },
  auth:{
    isLoading: false,
    hasError: false,
    error: '',
    isLoggedIn: false,
    token: ''
  }
};

export const test = 5;
