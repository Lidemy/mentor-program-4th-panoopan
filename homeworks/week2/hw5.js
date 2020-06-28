function join(arr, concatStr) {
    if(arr.length === 1) return arr[0]
    var ans = arr[0]
    for(var i=1; i<arr.length; i++){
        ans += (concatStr + arr[i])
    }
    return ans 
}

function repeat(str, times) {
    var ans = ''
    for(var i=1; i<=times; i++){
        ans += str
    }
    return ans
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
