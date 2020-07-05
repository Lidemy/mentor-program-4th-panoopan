// LIOJ 1004 聯誼順序比大小
// 需考慮題目範圍：數字太大的情況下，用 Number 處理會出問題，因此應該以 String 的邏輯解題
// 在 JavaScript 中，最大正整數為 25^3 - 1

/* eslint-disable no-param-reassign */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function compare(a, b, p) {
  if (a === b) return 'DRAW'; // 先判斷最簡單的狀況：平手

  // 先假設都是要回傳比較大的數字
  // 如果 p 為 -1，就是要回傳比較小的數字，顯示結果會相反，所以就把 a 和 b 的值對調，這樣答案也會相反
  if (Number(p) === -1) {
    const temp = a;
    a = b;
    b = temp;
  }

  const lengthA = a.length;
  const lengthB = b.length;

  // 當 a b 的位數不相同時，可以直接判斷位數比大小
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  // 如果 a b 位數相同，則要從數字內容比大小，從最高位數(字串的最左邊)開始比，若相同就繼續往下比，一直比到不相同時，比大小
  return a > b ? 'A' : 'B';
}

function solve(line) {
  const m = Number(line[0]);
  for (let i = 1; i <= m; i += 1) {
    const [a, b, p] = line[i].split(' ');
    console.log(compare(a, b, p));
  }
}

rl.on('close', () => solve(lines));
