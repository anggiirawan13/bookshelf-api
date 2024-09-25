import booksDatabase from '../../database/books/BooksDatabase.js';

const deleteBookService = (request, response) => {
  const { bookId } = request.params;
  const index = booksDatabase.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    booksDatabase.splice(index, 1);

    return response
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  }

  return response
    .response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    })
    .code(404);
};

export default deleteBookService;
