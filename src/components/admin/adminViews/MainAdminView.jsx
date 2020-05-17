import React from 'react';
// Styles
import styles from './MainAdminView.module.scss';
// Dictioneries
import { ADMIN_DISPLAYS } from '../../../controllers/AdminController';
// Libs
import { app } from '../../../common/config';
// Components
import BarChart from '../../common/BarChart';

// ----- Consts ----- //
const buttons = Object.keys(ADMIN_DISPLAYS).filter((x) => x !== 'MAIN');
const { cdn } = app;

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

const MainAdminView = ({ title, changeView, misc }) => {
  console.log(misc);
  const { screenHeight, screenWidth } = {};
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

          <BarChart dimensions={{ screenHeight, screenWidth }} />
        </div>
        <div className={styles.data_container} />
      </div>
    </div>
  );
};

export default MainAdminView;
