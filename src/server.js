import { server } from '@hapi/hapi';
import bookController from './controller/books/BooksController.js';

const init = async () => {
  const app = server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  app.route(bookController);

  await app.start();

  console.error(`Server berjalan pada ${app.info.uri}`);
};

init();
