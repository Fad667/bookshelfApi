const {
  addBooksHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deteleBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  { method: 'GET', path: '/books', handler: getAllBooksHandler },

  { method: 'GET', path: '/books/{id}', handler: getBookByIdHandler },

  { method: 'PUT', path: '/books/{id}', handler: editBookByIdHandler },

  { method: 'DELETE', path: '/books/{id}', handler: deteleBookByIdHandler },
];

module.exports = routes;
