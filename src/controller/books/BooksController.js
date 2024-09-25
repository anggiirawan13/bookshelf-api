import addBookService from '../../service/books/AddBooksService.js';
import deleteBookService from '../../service/books/DeleteBooksService.js';
import detailBookService from '../../service/books/DetailBooksService.js';
import editBookService from '../../service/books/EditBooksService.js';
import listBookService from '../../service/books/ListBooksService.js';
import { baseURI, baseURIWithParamBookId } from '../../constanta/books/BooksConstanta.js';

const bookController = [
  {
    method: 'POST',
    path: baseURI,
    handler: addBookService,
  },
  {
    method: 'GET',
    path: baseURI,
    handler: listBookService,
  },
  {
    method: 'GET',
    path: baseURIWithParamBookId,
    handler: detailBookService,
  },
  {
    method: 'PUT',
    path: baseURIWithParamBookId,
    handler: editBookService,
  },
  {
    method: 'DELETE',
    path: baseURIWithParamBookId,
    handler: deleteBookService,
  },
];

export default bookController;