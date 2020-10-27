import React from 'react';
// Styles
import styles from './MainAdminView.module.scss';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../../controllers/AdminController';
// Libs
import { app } from '../../../common/config';
import classNames from 'classnames';
// Components
import BarChart from '../../common/BarChart';

// ----- Consts ----- //
const buttons = Object.keys(ADMIN_DISPLAYS).filter((x) => x !== 'MAIN');
const { cdn } = app;

// TMP //
const t = (field) => {
  switch (field) {
    case 'orderId':
      return 'מס הזמנה';
    case 'sum':
      return 'שווי';
    case 'fullfilmentStatus':
      return 'סטטוס';
    case 'acceptedAt':
      return 'תאריך אישור';
    case 'clientName':
      return 'לקוח';
    default:
      return '';
  }
};

const orders = [{
  orderId: 15384,
  clientName: 'david',
  acceptedAt: new Date() - 2,
  fullfilmentStatus: 1,
  sum: 2504,

}, {
  orderId: 41643,
  clientName: 'david',
  createdAt: new Date() - 2,
  acceptedAt: new Date() - 1,
  fullfilmentStatus: 0,
  sum: 3421, // tempshould be cart
},
{
  orderId: 11111,
  clientName: 'david',
  createdAt: new Date() - 2,
  acceptedAt: new Date() - 1,
  fullfilmentStatus: 0,
  sum: 3421, // tempshould be cart
},
{
  orderId: 24212,
  clientName: 'david',
  createdAt: new Date() - 2,
  acceptedAt: new Date() - 1,
  fullfilmentStatus: 0,
  sum: 3421, // tempshould be cart
},
];

// ----- Components ----- //
const Button = ({ type, onClick }) => {
  const name = ADMIN_DISPLAYS[type];
  return (
    <div
      className={styles.button_container}
      onClick={() => onClick(type)}
    >
      { type === 'ORDERS'
        ? (
          <>
            <div className={styles.orders_title}>
              <img
                src={`${cdn}/${name}.svg`}
                alt={`${name}_Icon`}
                className={styles.image}
              />
              <p>
                ניהול הזמנות
              </p>
            </div>
            <div className={styles.orders_open}>
              *הזמנות פתוחות: 15
            </div>
          </>
        )
        : (
          <div className={styles.regular}>
            <img
              src={`${cdn}/${name}.svg`}
              alt={`${name}_Icon`}
              className={styles.image}
            />
            <div className={styles.title}>
              {`ניהול ${name}`}
            </div>
          </div>
        )}
    </div>
  );
};

const TableHeader = (props) => (
  <div className={classNames(styles.row_container, styles.header)}>
    {Object.keys(orders[0]).map((field) => (
      <div className={styles.row_cell}>
        {t(field)}
      </div>
    ))}
  </div>
);

// This will get an order object as a prop
const TableRow = ({ i }) => (
  <div className={styles.row_container}>
    {Object.values(orders[0]).map((value) => (
      <div className={styles.row_cell}>
        {value}
      </div>
    ))}
  </div>
);

const OpenOrders = (props) => (
  <div className={styles.table_container}>
    <div className={styles.header}>
      <p>ניהול הזמנות</p>
    </div>
    <div className={styles.table}>
      <TableHeader />
      {orders.map((order, index) => (
        <TableRow i={index} />
      ))}
    </div>
  </div>
);

const MainAdminView = ({ misc, title, changeView }) => {
  const x = 5;
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_container}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.buttons}>
          {buttons.map((btn) => <Button onClick={changeView} type={btn} />)}
        </div>
      </div>
      <div className={styles.info_container}>
        <div className={styles.chart_container}>
          <BarChart />
        </div>
        <div className={styles.open_orders_container}>
          <OpenOrders />
        </div>
      </div>
    </div>
  );
};

export default MainAdminView;
