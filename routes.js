// import {
//   getAllBooks,
//   getBookDetails,
//   addBook,
//   updateBookDetails,
//   deleteBook
// } from './book_handler.js';

// export const routes = [
//   {
//     path: /^\/books$/,
//     method: 'GET',
//     handler: getAllBooks,
//   },
//   {
//     path: /^\/books\/(\d+)$/,
//     method: 'GET',
//     handler: getBookDetails,
//   },
//   {
//     path: /^\/books\/(\d+)$/,
//     method: 'PUT',
//     handler: updateBookDetails,
//   },
//   {
//     path: /^\/books$/,
//     method: 'POST',
//     handler: addBook,
//   },
//   {
//     path: /^\/books\/(\d+)$/,
//     method: 'DELETE',
//     handler: deleteBook,
//   },
// ];


import {
  getAllBooks,
  getBookDetails,
  addBook,
  updateBookDetails,
  deleteBook
} from './book_handler.js';


// routeMap is a JavaScript object (acting like a hashmap/dictionary) where:
// The keys are HTTP methods: 'GET', 'POST', 'PUT', 'DELETE'
// Each route definition is an object with:


// path: a regular expression to match against the incoming request’s URL


// handler: the function to execute when this path is matched


export const routeMap = {
  GET: [
    { path: /^\/books$/, handler: getAllBooks },
    { path: /^\/books\/(\d+)$/, handler: getBookDetails }
  ],
  POST: [
    { path: /^\/books$/, handler: addBook }
  ],
  PUT: [
    { path: /^\/books\/(\d+)$/, handler: updateBookDetails }
  ],
  DELETE: [
    { path: /^\/books\/(\d+)$/, handler: deleteBook }
  ]
};
