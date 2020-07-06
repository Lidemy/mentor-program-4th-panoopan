// HW3-hw4 LIOJ 1030 判斷迴文

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(line) {
  const str = line[0];
  let ans = '';
  for (let i = str.length - 1; i >= 0; i -= 1) { // 字串倒著印
    ans += str[i];
  }
  if (ans === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => solve(lines));
