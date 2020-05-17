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
  misc: {
    screenHeight: 1,
    screenWidth: 1,
  },
};

export const MONTHS = [
  'ינואר',
  'פברואר',
  'מרץ',
  'אפריל',
  'מאי',
  'יוני',
  'יולי',
  'אוגוסט',
  'ספטמבר',
  'אוקטובר',
  'נובמבר',
  'דצמבר',
];
