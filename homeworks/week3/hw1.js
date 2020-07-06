// HW3-hw1 LIOJ 1021 好多星星

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(line) {
  const n = Number(line[0]);
  let result = '';
  for (let i = 1; i <= n; i += 1) {
    result = '*'.repeat(i); // 第幾層就有幾顆＊
    console.log(result);
  }
}

rl.on('close', () => solve(lines));
