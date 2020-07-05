// HW3-hw2 LIOJ 水仙花數
// 水仙花數定義:一個 n 位數的數字，每一個數字的 n 次方加總等於自身
// EX:1^3 + 5^3 + 3^3 = 153

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function isNarcissistic(n) {
  const str = n.toString(); // 先將數字轉為字串
  const digits = str.length; // 字串長度 = 數字位數
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]) ** digits; // = Math.pow(str[i],digits)
  }
  return sum === n;
}

function solve(line) {
  const temp = line[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

rl.on('close', () => solve(lines));
