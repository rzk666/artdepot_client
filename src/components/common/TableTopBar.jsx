/* eslint-disable no-new */
import React from 'react';
// Components
import { Input, Button } from 'semantic-ui-react';
// Styles
import styles from './TableTopBar.module.scss';

// ----- Help Function ----- //
const getButtonText = (type) => {
  switch (type) {
    case 'מוצרים':
      return 'הוסף מוצר';
    case 'משתמשים':
      return 'הוסף משתמש';
    default:
      return null;
  }
};

// ----- Help Components ----- //
const TableTopBar = ({
  currentSearch,
  updateSearch,
  tableType,
  isLoading,
}) => (
  <div
    className={styles.top_bar_container}
  >
    <div className={styles.search_container}>
      <Input
        loading={isLoading}
        value={currentSearch}
        onChange={(e) => updateSearch(e.currentTarget.value)}
        icon="search"
        placeholder={`חיפוש ${tableType}`}
      />
    </div>
    <div className={styles.filters_container}>
      {tableType !== 'הזמנות' && <Button>{getButtonText(tableType)}</Button>}
    </div>
  </div>
);

export default TableTopBar;
