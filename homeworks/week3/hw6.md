## hw1：好多星星
```javascript=
//方法一：函式填空解法
function stars(n){
    for(let i=1;i<=n;i++){
        printStar(i);
    }
}
function printStar(n){
    let s = '';
    for(let i=1;i<=n;i++){
        s += '*';
    }
    console.log(s);
}
stars(5)

//方法二：將函式合併解法
function stars(n){
    let result = ''
    for(let i=1; i<=n; i++){
        result += '*' 
        console.log(result)
    }
    return result
}
stars(5)

//方法三：內建函式
function stars(n){
    let result = ''
    for(let i=1; i<=n; i++){
        result = '*'.repeat(i)
        console.log(result)
    }
    return result
}
stars(5)
```
* 思考模式
    1. 方法一：一開始是用 for 迴圈將 1 到 n 的值都帶入函式，在函式裡面再執行一次 for 迴圈，第幾層就累加幾顆星星。
    2. 方法二：上課之後發現可以把函式合併成一個，只要進行一次 for 迴圈，差別是要將 console.log 放進迴圈裡，才能印出每一層的值。
    3. 方法三：最方便的還是使用內建函式 string.repeat()。

* 檢討
原本不清楚 console.log 放在迴圈內及迴圈外的差異，藉由這個題目可以釐清觀念，主要是依要印出每圈迴圈的結果，或是要印出跑完整個迴圈的總結果決定。

## hw2：水仙花數
```javascript=
function solve(lines){
    //5 200 => ['5', '200']
    let temp = lines[0].split(' ');
    let n = Number(temp[0]);
    let m = Number(temp[1]);
    for(let i=n; i<=m; i++){
        if(isNarcissistic(i)){
            console.log(i)
        }
    }
}

// 方法一
//回傳數字幾位數
function digitsCount(n){
    // 1234/10 => 123 => 12 => 1 => 0
    if(n === 0) return 1;
    let result = 0
    while(n != 0){
        n = Math.floor( n/10 );  //無條件捨去
        result++ ;    //result = result +1
    }
    return result;
}

//每位數的此方總和是否等於數字本身
function isNarcissistic(n){
    let m = n
    let digits = digitsCount(m);
    let sum = 0;
    while(m != 0){
        let num = m % 10        // 取個位EX:1234 % 10 = 4 ->123 % 10 =3 ->...
        sum += num ** digits;   // 2**10=2的10次方=Math.pow(2,10)
        m = Math.floor( m/10 );  //無條件捨去
    }
    
    if(sum === n ){
        return true;
    }else{
        return false;
    }
    //可簡化成 return sum === n
}

// 方法二
// 以字串邏輯思考
function isNstr(n) {
    let str = n + '' //將 n 轉成字串，也可以用內建函式 let str = n.toString()
    let digits = str.length //判斷數字是幾位數
    let sum = 0
    for(let i=0; i<str.length; i++) {
      sum += Number(str[i]) ** digits // = Math.pow(str[i],digits)
    }
    return sum === n //if(sum === n) return true
  }
```
* 思考模式
    1. 方法一：先建一個函式回傳數字是幾位數，數字持續除以 10，一直到結果無條件捨去為為 ０ 為止，計算除以幾次就可以知道數字是幾位數。將此結果帶入另一個函式，測試每位數的次方加總是否等於數字本身。數字持續除以 10 並取餘數，就可以知道從個位數開始的每一位數字，計算每位數的次方總和，幾次方則是由上一個函式的幾位數決定，最後若總和等於原本帶入的值，就回傳 true，並印出此數值。

    2. 方法二：把數字轉換字串這題就會變得超簡單，因為計算字串長度就能知道數字是幾位數，再用迴圈就可以知道字串的每個數字。
* 檢討
這是 ALG101 裡面第一個比較複雜的題目，一開始被各種迴圈和邏輯轟炸所以看了幾次還是無法完全理解，但是在瞭解 Number 和 String 在性質和應用上的差異之後，就突然想通了。藉由這個題目，深刻體會到換一種思考邏輯可以少繞一大段路的感覺，也比較能分辨 for 及 while 迴圈在應用上的差異。

## hw3：判斷質數
```javascript=
//方法一：函式填空法
for(let i=0;i<n;i++){
    if(isPrime(arr[i])){ 
        console.log('Prime')
    }else{
        console.log('Composite')
    }
}

//判斷 arr[i]是否為質數的函式
function isPrime(n){ 
    if(n === 1) return false; //edge case
    for(let i=2;i<n;i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;   //若整個回圈跑完都沒有return false的話，就return true
}

//方法二：將函式合併進去
for(let i=0;i<n;i++){
    let isPrime = true  //一開始就先假設isPrime為true，
    if(arr[i] === 1){ //edge case
        isPrime = false;
    }
    for(let j=2;j<arr[i];j++){ //雙重迴圈
        if(arr[i] % j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log('Prime');
    }else{
        console.log('Composite');
    }
}

//方法三：用三元運算子判斷結果
function solve(lines){
    for(let i=1; i<lines.length; i++) {
      console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite') //三元運算子
    }
  }
  
function isPrime(n) {
    if(n === 1) return false //edge case
    for(let i=2; i<n; i++){ 
      if(n % i === 0) return false
    } 
    return true
}
```
* 思考模式
    1. 方法一：利用函式填空法，另外建一個函式判斷數值是否為質數，除了 1 和該數自身以外，如果可以被其他自然數整除，就 return  false。
    2. 方法二：將方法一的兩個函式合併成一個，會使用到雙重迴圈的邏輯，但是易讀性比較差。
    3. 方法三：跟方法一一樣使用函式填空法，只是改成用三元運算子判斷印出的結果。

* 檢討
此題用函式填空法比較容易懂，同時練習使用三元運算子，可以讓程式看起來更加簡潔。另外還要練習處理一些比較特別的例子，像是當數值等於一的時候。

## hw4：判斷迴文
```javascript=
//方法一：函式填空
function solve(lines) {
  let str = lines[0]
  if (reverse(str) === str) {
    console.log('True')
  } else {
    console.log('False')
  }
}

function reverse(str) {
  let result = ''
  for(let i=str.length - 1; i>=0; i--) {
    result += str[i]
  }
  return result
}

//方法二：合併函式
function solve(lines){
  let str = lines[0];
  let ans = '';
  for(let i=str.length-1; i>=0; i--){
    ans += str[i];
  }
  if(ans === str){
    console.log('True');
  }else{
    console.log('False');
  }
} 

//方法三：內建函式
function solve(lines) {
  let str = lines[0]
  console.log(str.split('').reverse().join('') === str ? 'True' : 'False') // string 無法直接使用 .reverse()，array 才可以
}

```
* 思考模式
    1. 方法一：用函式填空法，另外建立一個函式用迴圈將字串倒著印出來並回傳，再判斷跟原字串是否相同，如果相同就是迴文。
    2. 方法二：將方法一的兩個函式合併。
    3. 方法三：使用內建函式 .reverse()，加上三元運算子就可以一行解決。後來發現 string 無法直接使用 .reverse()，要用 .spilt('')將字串轉換成 object，reverse 完之後再用 .join('') 將物件轉換回 string 跟原字串比較。

* 檢討
原來內建函式可以連在一起使用，一行解決原本落落長的程式碼。原本以為 split 之後是將 string 轉成 array，結果用 typeof() 印出之後才發現是 object。

## hw5：聯誼順序比大小
```javascript=
function solve(lines) {
  let m = Number(lines[0])
  for(let i=1;i<=m; i++){
    let [a, b, p] = lines[i].split(' ')
    console.log(compare(a, b, p))
  }
}
//方法一
function compare(a, b, p){
  if(a === b) return 'DRAW' //先判斷最簡單的狀況：平手

  //先假設都是要回傳比較大的數字
  //如果 p 為 -1，就是要回傳比較小的數字，顯示結果會相反，所以就把 a 和 b 的值對調，這樣答案也會相反
  if(p == -1){
    let temp = a 
    a = b  
    b = temp 
  }

  const lengthA = a.length
  const lengthB = b.length

  //當 a b 的位數不相同時，可以直接判斷位數比大小
  if(lengthA !== lengthB){
    return lengthA > lengthB ? 'A' : 'B' //三元運算子(Ternary)
  }
  //如果 a b 位數相同，則要從數字內容比大小，從最高位數(字串的最左邊)開始比，若相同就繼續往下比，一直比到不相同時，比大小
  for(let j=0; j<lengthA; j++){
    if(a[j] == b[j]){
      continue
    }
    return a[j] > b[j] ? 'A' : 'B'
  }
}

//方法二
//字串其實比的是字典序，如果兩個字字串長度相同，那字典序其實就是數字大小的順序

 //當 a b 的位數不相同時，可以直接判斷位數比大小
  if(lengthA !== lengthB){
    return lengthA > lengthB ? 'A' : 'B' //三元運算子(Ternary)
  }
  return a > b ? 'A' : 'B'


//方法三：BigInt 是 JS 的內建物件，用以表示大於 2^53 -1 的數字，用此方法就能以 Number 的邏輯解題
function solve(lines) {
  let m = Number(lines[0])
  for(let i=1;i<=m; i++){
    let [a, b, p] = lines[i].split(' ')

    if (BigInt(a) === BigInt(b)) {
      console.log('DRAW')
    } else if ((BigInt(a) > BigInt(b) && p == 1) || (BigInt(a) < BigInt(b) && p == -1) ) {
      console.log('A')
    } else {
      console.log('B')
    }
  }
}
```
* 思考模式
    1. 方法一：將 number 轉換成 string 的邏輯思考。一開始先排除平手的狀況，接下來先預設結果都是回傳較大值為邏輯，先將數值轉為字串，並計算長度。當字串長度不同，可直接判斷字串將長的值為較大值，配合三元運算子回傳結果。若字串長度相等，則用迴圈由左至右判斷兩個值每個字是否相等，此方法等於從最大位數開始比較數字，如果相同就繼續比較下一位數，一直到比較到不同時，就可直接判斷數字較大的為較大值。最後再寫一個判斷式解決需回傳較小值的邏輯，只要將兩個數值的內容對調，就可以顯示相反的結果，前提是要將此判斷式放在前面，才能達到此效果。
    2. 方法二：將方法一判斷每位數大小的方法簡化，因為字串其實比的是字典序，如果兩個字字串長度相同，那字典序其實就是數字大小的順序，所以不需要特別再用迴圈比較。
    3. 方法三：用內建的 object "BigInt()" 就可以正常表示大於 2^53 -1 的數字，此方法就可以直接用 number 的邏輯解題。

* 檢討
天真的我原本以為這是一個簡單的題目，完全沒考慮到題目範圍的問題，看了參考答案之後，才發現事情不時我所想的那樣，算是進階版的 number 轉 string 題目，又多學到了一些思考方式，還有一個新的內建物件。

