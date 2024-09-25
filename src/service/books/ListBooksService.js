import booksDatabase from '../../database/books/BooksDatabase.js';

const listBookService = (request, response) => {
  const result = booksDatabase.filter((book) => {
    const queryParams = request.query;

    if (
      queryParams.name &&
      !book.name.toLowerCase().includes(queryParams.name.toLowerCase())
    ) {
      return false;
    }

    if (queryParams.reading !== undefined) {
      const readingStatus = queryParams.reading === '1';
      if (book.reading !== readingStatus) {
        return false;
      }
    }

    if (queryParams.finished !== undefined) {
      const finishedStatus = queryParams.finished === '1';
      if (book.finished !== finishedStatus) {
        return false;
      }
    }

    return true;
  });

  return response
    .response({
      status: 'success',
      data: {
        books: result.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

export default listBookService;
