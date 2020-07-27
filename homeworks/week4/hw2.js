const request = require('request');

const process = require('process'); // process 為 node.js 的內建模組

function listBook() {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      if (error) return console.log('抓取失敗', error);
      const data = JSON.parse(body);
      for (let i = 0; i < data.length; i += 1) {
        console.log(data[i].id, data[i].name);
      }
      return response;
    },
  );
}

function readBook(id) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, _response, body) => {
      if (error) return console.log('抓取失敗', error);
      const data = JSON.parse(body);
      return console.log(data);
    },
  );
}

function deleteBook(id) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error) => {
      if (error) return console.log('刪除失敗', error);
      return console.log('刪除成功！');
    },
  );
}

function createBook(name) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name,
      },
    },
    (error) => {
      if (error) return console.log('新增失敗', error);
      return console.log('新增成功！');
    },
  );
}

function updateBook(id, name) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: {
        name,
      },
    },
    (error) => {
      if (error) return console.log('更新失敗', error);
      return console.log('更新成功！');
    },
  );
}

switch (process.argv[2]) {
  case 'list':
    listBook();
    break;
  case 'read':
    readBook(process.argv[3]);
    break;
  case 'delete':
    deleteBook(process.argv[3]);
    break;
  case 'create':
    createBook(process.argv[3]);
    break;
  case 'update':
    updateBook(process.argv[3], process.argv[4]);
    break;
  default:
    console.log('non');
}
