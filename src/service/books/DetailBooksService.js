import booksDatabase from '../../database/books/BooksDatabase.js';

const detailBookService = (request, response) => {
  const { bookId } = request.params;
  const book = booksDatabase.find((result) => result.id === bookId);

  if (!book) {
    return response
      .response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      })
      .code(404);
  }

  return response
    .response({
      status: 'success',
      data: {
        book,
      },
    })
    .code(200);
};

export default detailBookService;
