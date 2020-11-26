// General Related Functions
export const cleanValidationSchema = (obj) => {
  const newObject = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      // Handle Array
      if (Array.isArray(obj[key])) {
        const cleanedArray = obj[key].map((x) => cleanValidationSchema(x)).filter((x) => Object.keys(x).length);
        if (cleanedArray.length) {
          newObject[key] = cleanedArray;
        }
      } else {
      // Handle object
        const validatedSubObject = cleanValidationSchema(obj[key]);
        if (Object.keys(validatedSubObject).length) {
          newObject[key] = validatedSubObject;
        }
      }
    } else if (obj[key]) {
      newObject[key] = obj[key];
    }
  });
  return newObject;
};

// Validate Functions
const validateRequired = (data) => {
  if (!data) {
    return 'שדה חובה';
  }
  return '';
};
const validateEmailFormat = (email) => {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return 'כתובת מייל לא תקינה';
  }
  return '';
};

// Validators
export const LOGIN_VALIDATOR = {
  customerId: (data) => (typeof (data) === 'number'),
  password: (data) => (typeof (data) === 'string'),
};

export const NEW_USER_VALIDATOR = {
  validateId: (id) => validateRequired(id),
  validateName: (name) => validateRequired(name),
  validateCompany: (company) => validateRequired(company),
  validateEmail: (email) => {
    let error = '';
    error = validateRequired(email);
    if (error) {
      return error;
    }
    error = validateEmailFormat(email);
    return error;
  },
  validateDeliveryAddresses: (deliveryAddress) => {
    const { city, address, zipcode } = deliveryAddress[0];
    const error = {
      city: '',
      address: '',
      zipcode: '',
    };
    error.city = validateRequired(city);
    error.address = validateRequired(address);
    error.zipcode = validateRequired(zipcode);
    return [error];
  },
};
