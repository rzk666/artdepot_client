/* eslint-disable no-new */
import React, { Component } from 'react';
// Common
import {
  getEnglishFieldType,
  getCategoryName,
  getDiscountedPrice,
  ISOToShortDate,
} from '../../libs/helpers';
// Components
import { Input } from 'semantic-ui-react';
// Libs
import classnames from 'classnames';
// Images
import Available from '../../static/images/icons/approve.png';
import NotAvailable from '../../static/images/icons/cancel.png';
// Styles
import styles from './Table.module.scss';

// ----- Help Functions ----- //
const getShortName = (name) => {
  if (name.length > 12) {
    return `${name.slice(0, 9)}...`;
  }
  return name;
};

// ----- Help Components ----- //
const TableTopBar = ({ updateSearch, tableType }) => {
  let searchPlaceholder;
  switch (tableType) {
    case 'מוצרים':
      searchPlaceholder = 'חיפוש מוצרים';
      break;
    case 'משתמשים':
      searchPlaceholder = 'חיפוש משתמשים';
      break;
    case 'הזמנות':
      searchPlaceholder = 'חיפוש הזמנות';
      break;
    default:
      break;
  }
  return (
    <div
      className={styles.top_bar_container}
    >
      <div className={styles.search_container}>
        <Input icon="search" placeholder={searchPlaceholder} />
      </div>
      <div className={styles.filters_container} />
    </div>
  );
};

const TableHeaderCell = ({ title, style, key }) => (
  <div key={key} style={{ ...style }} className={styles.table_header_cell}>
    {title}
  </div>
);

const TableCell = ({
  data, style, key, tableType,
}) => {
  const { type, value, imgStyle } = data;
  const addPadding = ((!tableType === 'products')
                      && (typeof data === 'number' || type));
  // This can only mean its an image
  return (
    <div style={{ ...style, justifyContent: Number.isInteger(data) ? 'center' : '', paddingRight: addPadding ? '40px' : '' }} className={styles.table_cell}>
      { type
        ? <img style={imgStyle} src={value} alt={`${key}_image`} /> : data }
    </div>
  );
};

const Table = ({ type, fields, data }) => {
  const TABLE_BODY = () => {
    if (type === 'products') {
      const VARIATIONS = [];
      data.map((product) => {
        VARIATIONS.push(...product.variations);
      });
      return (
        <>
          { VARIATIONS.map((variation) => {
            const {
              catalog_id,
              images,
              title,
              is_available,
              price,
              unit_sale_precentage,
            } = variation;
            return (
              <div
                style={{ height: '100px' }}
                className={styles.table_row}
              >
                { fields.map((field, i) => {
                  const { fieldTitle, style } = field;
                  let cellData;
                  switch (fieldTitle) {
                    case 'תמונה':
                      cellData = { type: 'img', value: images[0], imgStyle: { height: '75px', width: '75px' } };
                      break;
                    case 'שם':
                      cellData = title;
                      break;
                    case 'קטגוריה':
                      cellData = getCategoryName(catalog_id);
                      break;
                    case 'זמין במלאי':
                      cellData = { type: 'img', value: is_available ? Available : NotAvailable, imgStyle: { height: '35px', width: '35px' } };
                      break;
                    case 'מחיר נוכחי':
                      cellData = `${price} ש"ח`;
                      break;
                    case 'מחיר מבצע':
                      cellData = `${getDiscountedPrice(price, unit_sale_precentage)} ש"ח`;
                      break;
                    default:
                      break;
                  }
                  return (
                    <TableCell
                      key={`${i}_field`}
                      data={cellData}
                      style={style}
                    />
                  );
                })}
              </div>
            );
          })}
        </>
      );
    }
    if (type === 'users') {
      return (
        <>
          { data.map((user) => {
            const {
              id,
              name,
              company,
              delivery_addresses,
              total_orders,
            } = user;
            const { total_paid, amount } = total_orders;
            const { city, address } = delivery_addresses[0];
            return (
              <div
                style={{ height: '50px' }}
                className={styles.table_row}
              >
                { fields.map((field, i) => {
                  const { fieldTitle, style } = field;
                  let cellData;
                  switch (fieldTitle) {
                    case 'ח"פ':
                      cellData = id.toString();
                      break;
                    case 'שם':
                      cellData = getShortName(name);
                      break;
                    case 'חברה':
                      cellData = getShortName(company);
                      break;
                    case 'כתובת':
                      cellData = `${address}, ${city}`;
                      break;
                    case 'כמות הזמנות':
                      cellData = amount.toString();
                      break;
                    case 'סך עסקאות':
                      cellData = `${total_paid.toString()} ש"ח`;
                      break;
                    default:
                      break;
                  }
                  return (
                    <TableCell
                      key={`${i}_field`}
                      data={cellData}
                      style={style}
                    />
                  );
                })}
              </div>
            );
          })}
        </>
      );
    }
    return (
      <>
        { data.map((order) => {
          const {
            created_utc,
            user_id,
            is_paid,
            is_fullfilled,
            fullfilled_date,
            paid_date,
            variations,
          } = order;
          // Get customer company & name by userId
          // --- TEMP UNTIL WE FIGURE OUT HOW TO GET UESR DETAILS HERE --- //
          const tempUserName = 'רזי';
          const tempUserCompany = 'הפיראט האדום';
          const orderSum = variations.reduce((acc, item) => acc + item.price, 0);
          return (
            <div
              style={{ height: '50px' }}
              className={classnames(styles.table_row, { [styles.order_completed]: is_fullfilled })}
            >
              { fields.map((field, i) => {
                const { fieldTitle, style } = field;
                let cellData;
                switch (fieldTitle) {
                  case 'תאריך יצירה':
                    cellData = ISOToShortDate(created_utc);
                    break;
                  case 'לקוח':
                    cellData = getShortName(tempUserName);
                    break;
                  case 'חברה':
                    cellData = getShortName(tempUserCompany);
                    break;
                  case 'שולם':
                    cellData = { type: 'img', value: is_paid ? Available : NotAvailable, imgStyle: { height: '35px', width: '35px' } };
                    break;
                  case 'תאריך תשלום':
                    cellData = ISOToShortDate(paid_date);
                    break;
                  case 'נשלח':
                    cellData = { type: 'img', value: is_fullfilled ? Available : NotAvailable, imgStyle: { height: '35px', width: '35px' } };
                    break;
                  case 'תאריך שילוח':
                    cellData = ISOToShortDate(fullfilled_date);
                    break;
                  case 'סכום הזמנה':
                    cellData = `${orderSum} ש"ח`;
                    break;
                  default:
                    break;
                }
                return (
                  <TableCell
                    key={`${i}_field`}
                    data={cellData}
                    style={style}
                  />
                );
              })}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className={styles.table}>
      <div className={styles.table_header}>
        { fields.map((field, i) => {
          const { fieldTitle, style } = field;
          return (
            <TableHeaderCell
              key={`${i}_field`}
              title={fieldTitle}
              style={style}
            />
          );
        })}
      </div>
      <div className={styles.table_body}>
        <TABLE_BODY />
      </div>
      <div className={styles.table_footer} />
    </div>
  );
};

class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: '',
    };
  }

  updateSearch(currentSearch) {
    this.setState({ currentSearch });
  }

  render() {
    const { tableType, data, fields } = this.props;
    return (
      <>
        <TableTopBar tableType={tableType} updateSearch={(currentSearch) => this.updateSearch(currentSearch)} />
        <Table data={data} type={getEnglishFieldType(tableType)} fields={fields} />
      </>
    );
  }
}

export default CustomTable;
