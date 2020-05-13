export const INITIAL_STATE = {
  products: {
    isLoading: true,
    hasError: false,
    errorCode: -1,
    data: [],
  },
  auth: {
    isLoading: false,
    hasError: false,
    error: '',
    isLoggedIn: false,
    token: '',
  },
  admin: {
    isLoading: false,
    hasError: false,
    error: '',
  },
};

export const test = 5;
