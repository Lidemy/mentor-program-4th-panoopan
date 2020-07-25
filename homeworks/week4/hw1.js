const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) return console.log('抓取失敗', error);
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(data[i].id, data[i].name);
    }
    return response;
  },
);
