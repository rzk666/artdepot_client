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
import { formatDiagnostic } from 'typescript';

// ----- Help Functions ----- //
const getShortName = (name) => {
  if (name.length > 12) {
    return `${name.slice(0, 9)}...`;
  }
  return name;
};

// ----- Help Components ----- //
const TableTopBar = ({
  currentSearch,
  updateSearch,
  tableType,
}) => (
  <div
    className={styles.top_bar_container}
  >
    <div className={styles.search_container}>
      <Input
        value={currentSearch}
        onChange={(e) => updateSearch(e.currentTarget.value)}
        icon="search"
        placeholder={`חיפוש ${tableType}`}
      />
    </div>
    <div className={styles.filters_container} />
  </div>
);

const TableHeaderCell = ({ title, style, key }) => (
  <div key={key} style={{ ...style }} className={styles.table_header_cell}>
    {title}
  </div>
);

const TableCell = ({
  data, style, key,
}) => {
  const { type, value, imgStyle } = data;
  // This can only mean its an image
  return (
    <div style={{ ...style }} className={styles.table_cell}>
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
            user,
            is_paid,
            is_fullfilled,
            fullfilled_date,
            paid_date,
            variations,
          } = order;
          // Get customer company & name by userId
          // --- TEMP UNTIL WE FIGURE OUT HOW TO GET UESR DETAILS HERE --- //
          const { name, company, id } = user;
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
                    cellData = getShortName(name);
                    break;
                  case 'ח"פ לקוח':
                    cellData = id;
                    break;
                  case 'חברה':
                    cellData = getShortName(company);
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
      currentPage: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentSearch } = this.state;
    const { currentDisplay } = this.props;
    const hasSearchChanged = prevState.currentSearch !== currentSearch;
    const hasDisplayChanged = currentDisplay !== prevProps.currentDisplay;
    // Hadnle search changes
    if (hasSearchChanged && currentDisplay !== 'משתמשים') {
      this.handleServerSearch();
    }
    // Handle display change
    if (hasDisplayChanged) {
      this.updateSearch('');
    }
  }

  handleServerSearch() {
    const {
      fetchDataFunction,
    } = this.props;
    const { currentSearch, currentPage } = this.state;
    if (currentSearch) {
      fetchDataFunction('search', currentSearch);
    } else {
      fetchDataFunction('index', currentPage);
    }
  }

  updateSearch(currentSearch) {
    this.setState({ currentSearch });
  }

  render() {
    const {
      currentDisplay,
      data,
      fields,
    } = this.props;
    const { currentSearch } = this.state;
    let filteredUsers;
    if (currentDisplay === 'משתמשים') {
      filteredUsers = data.filter((user) => {
        const { name, company, id } = user;
        const formattedSearch = currentSearch.split(' ');
        if (formattedSearch.length === 1) {
          return name.includes(currentSearch)
          || company.includes(currentSearch)
          || id.toString().includes(currentSearch);
        }
        let isFound = true;
        for (let i = 0; i < formattedSearch.length && isFound; i += 1) {
          if (!name.includes(formattedSearch[i])
              && !company.includes(formattedSearch[i])
              && !id.toString().includes(formattedSearch[i])) {
            isFound = false;
          }
        }
        return isFound;
      });
    }
    return (
      <>
        <TableTopBar
          currentSearch={currentSearch}
          tableType={currentDisplay}
          updateSearch={(search) => this.updateSearch(search)}
        />
        <Table
          data={filteredUsers || data}
          type={getEnglishFieldType(currentDisplay)}
          fields={fields}
        />
      </>
    );
  }
}

export default CustomTable;
