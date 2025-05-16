import {
  getAllBooks,
  getBookDetails,
  addBook,
  updateBookDetails,
  deleteBook
} from './book_handler.js';

export const routes = [
  {
    path: /^\/books$/,
    method: 'GET',
    handler: getAllBooks,
  },
  {
    path: /^\/books\/(\d+)$/,
    method: 'GET',
    handler: getBookDetails,
  },
  {
    path: /^\/books\/(\d+)$/,
    method: 'PUT',
    handler: updateBookDetails,
  },
  {
    path: /^\/books$/,
    method: 'POST',
    handler: addBook,
  },
  {
    path: /^\/books\/(\d+)$/,
    method: 'DELETE',
    handler: deleteBook,
  },
];

