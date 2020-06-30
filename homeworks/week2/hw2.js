function capitalize(str) {
    var ans = ''
    if(str[0] >= 'a' && str[0] <= 'z'){
        ans = str[0].toUpperCase()
    }else{
        ans = str[0]
    }

    for(var i=1; i<str.length; i++){
        ans += str[i]
    }
    
    return ans
}

console.log(capitalize('hello'));


