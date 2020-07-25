const request = require('request');

const process = require('process'); // process 為 node.js 的內建模組

const API_ENDPOINT = 'https://restcountries.eu/rest/v2';

if (!process.argv[2]) {
  console.log('請輸入國家名稱');// 若只輸入 node hw3.js
}

request(
  `${API_ENDPOINT}/name/${process.argv[2]}`,
  (error, _response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }

    const data = JSON.parse(body);
    if (data.statusCode >= 400 && data.statusCode < 500) {
      return console.log('找不到國家資訊');
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log('===============');
      console.log(`s國家：${data[i].name}`);
      console.log(`首都：${data[i].capital}`);
      console.log(`貨幣：${data[i].currencies[0].code}`);
      console.log(`國碼：${data[i].callingCodes[0]}`);
    }
    return true;
  },
);
