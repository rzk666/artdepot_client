export const getCategoryName = (id) => {
  switch (id) {
    case 1:
      return 'אומנות';
    case 2:
      return 'יצירה';
    case 3:
      return 'פסיפס';
    default:
      break;
  }
};

export const getDiscountedPrice = (price, discount) => {
  if (discount) {
    return parseFloat(Number(price - ((discount / 100) * price)).toFixed(2));
  }
  return price;
};

export const getEnglishFieldType = (field) => {
  switch (field) {
    case 'מוצרים':
      return 'products';
    case 'משתמשים':
      return 'users';
    case 'הזמנות':
      return 'orders';
    default:
      return '';
  }
};

export const ISOToShortDate = (date) => {
  if (!date) {
    return '-';
  }
  const tempDate = new Date(date);
  const year = tempDate.getFullYear();
  let month = tempDate.getMonth() + 1;
  let day = tempDate.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
};
