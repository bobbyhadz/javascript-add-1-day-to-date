// EXAMPLE 1 - Add 1 Day to a Date using JavaScript

function addOneDay(date = new Date()) {
  date.setDate(date.getDate() + 1);

  return date;
}

// ✅ Add 1 day to the current date
const result1 = addOneDay();
console.log(result1); // 👉️ 2023-07-26T07:05:46.110Z

// -----------------------------------------------

// ✅ Add 1 day to a different date
const date = new Date('2023-06-17T00:00:00.000Z');

const result2 = addOneDay(date);
console.log(result2); // 👉️ 2023-06-18T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add 1 day to a Date without mutation

// function addOneDay(date = new Date()) {
//   const dateCopy = new Date(date);

//   dateCopy.setDate(dateCopy.getDate() + 1);

//   return dateCopy;
// }

// const date = new Date('2023-02-17T00:00:00.000Z');

// const result = addOneDay(date);
// console.log(result); // 👉️ 2023-02-18T00:00:00.000Z

// console.log(date); // 👉️ 2023-02-17T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add 1 Day to a Date using date-fns

// import {addDays} from 'date-fns';

// // ✅ Add 1 day to the current Date
// const result1 = addDays(new Date(), 1);
// console.log(result1); // 👉️ 2023-07-26T07:10:32.724Z

// // ✅ Add 1 day to a different date
// const date = new Date('2023-02-17T00:00:00.000Z');

// const result2 = addDays(date, 1);
// console.log(result2); // 👉️ 2023-02-18T00:00:00.000Z

// console.log(date); // 👉️ 2023-02-17T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add 1 Day to a Date using moment.js

// import moment from 'moment';

// const result1 = moment(new Date()).add(1, 'days');
// console.log(result1); // 👉️ 2023-01-15T07:41:46.845Z

// const date = new Date('2023-02-17T00:00:00.000Z');
// const result2 = moment(date).add(1, 'days');
// console.log(result2); // 👉️ 2023-02-18T00:00:00.000Z

// console.log(date); // 👉️ 2023-02-17T00:00:00.000Z
