// import React, { useState } from 'react';

// const charAtPos = (array, type) => {
//   if (!array) {
//     return [];
//   }
//   if (array.length === 1) {
//     if (type === 'odd') {
//       return array[0];
//     }
//     return '';
//   } if (array.length === 2) {
//     if (type === 'even') {
//       return array[1];
//     }
//     return array[0];
//   }
//   const newChar = type === 'odd' ? array[0] : array[1];
//   const newArray = array.splice(2, array.length);
//   return [newChar, ...charAtPos(newArray, type)];
// };

