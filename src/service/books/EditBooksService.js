import booksDatabase from '../../database/books/BooksDatabase.js';
import addOrEditValidator from '../../validator/books/AddOrEditBooksValidator.js';

const editBookService = (request, response) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const { bookId } = request.params;

  const validationError = addOrEditValidator(
    name,
    readPage,
    pageCount,
    response,
    true
  );
  if (validationError) {
    return response
      .response(validationError.source)
      .code(validationError.statusCode);
  }

  const index = booksDatabase.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    const updatedAt = new Date().toISOString();

    booksDatabase[index] = {
      ...booksDatabase[index],
      updatedAt,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    };

    return response
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  }

  return response
    .response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    .code(404);
};

export default editBookService;
