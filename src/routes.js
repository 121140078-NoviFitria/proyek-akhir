const { addBookHandler, getAllBooksHandler, getBooksByIdHandler, updateBookByIdHandler, deleteBookByIdHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
];
   
module.exports = routes;