export const INITIAL_STATE = {
  products: {
    isLoading: true,
    hasError: false,
    errorCode: -1,
    data: [],
  },
  users: {
    isLoading: true,
    hasError: false,
    errorCode: -1,
    data: [],
  },
  orders: {
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

export const DAYS = [
  'ראשון',
  'שני',
  'שלישי',
  'רביעי',
  'חמישי',
  'שישי',
  'שבת',
];

export const ADMIN_TABLE_FIELDS = {
  products: [
    {
      fieldTitle: 'תמונה',
      style: { width: '25%' },
    }, {
      fieldTitle: 'שם',
      style: { flex: 1 },
    },
    {
      fieldTitle: 'קטגוריה',
      style: { width: '10%' },
    },
    {
      fieldTitle: 'זמין במלאי',
      style: { width: '15%' },
    }, {
      fieldTitle: 'מחיר נוכחי',
      style: { width: '10%' },
    }, {
      fieldTitle: 'מחיר מבצע',
      style: { width: '10%' },
    }],
  users: [
    {
      fieldTitle: 'ח"פ',
      style: { width: '7.5%' },
    }, {
      fieldTitle: 'שם',
      style: { width: '10%' },
    }, {
      fieldTitle: 'חברה',
      style: { width: '10%' },
    }, {
      fieldTitle: 'כתובת',
      style: { flex: 1 },
    }, {
      fieldTitle: 'כמות הזמנות',
      style: { width: '10%' },
    }, {
      fieldTitle: 'סך עסקאות',
      style: { width: '10%' },
    }],
  orders: [
    {
      fieldTitle: 'תאריך יצירה',
      style: { width: '7.5%' },
    }, {
      fieldTitle: 'לקוח',
      style: { width: '10%' },
    }, {
      fieldTitle: 'חברה',
      style: { flex: 1 },
    },
    {
      fieldTitle: 'שולם',
      style: { width: '10%' },
    },
    {
      fieldTitle: 'תאריך תשלום',
      style: { width: '10%' },
    },
    {
      fieldTitle: 'נשלח',
      style: { width: '10%' },
    },
    {
      fieldTitle: 'תאריך שילוח',
      style: { width: '10%' },
    },
    {
      fieldTitle: 'סכום הזמנה',
      style: { width: '10%' },
    },
  ],
};
