import { nanoid } from 'nanoid';
import booksDatabase from '../../database/books/BooksDatabase.js';
import addOrEditValidator from '../../validator/books/AddOrEditBooksValidator.js';

const addBookService = (request, response) => {
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

  const validationError = addOrEditValidator(
    name,
    readPage,
    pageCount,
    response,
    false
  );
  if (validationError) {
    return response
      .response(validationError.source)
      .code(validationError.statusCode);
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt: insertedAt,
  };

  booksDatabase.push(newBook);

  return response
    .response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    })
    .code(201);
};

export default addBookService;
