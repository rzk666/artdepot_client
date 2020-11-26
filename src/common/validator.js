export const LOGIN_VALIDATOR = {
  customerId: (data) => (typeof (data) === 'number'),
  password: (data) => (typeof (data) === 'string'),
};

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
    const { city, address, zipcode } = deliveryAddress;
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
