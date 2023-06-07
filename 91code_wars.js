function strCount(str, letter){  
  //code here
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] == letter ? result ++ : 0;
  }
    return result;
}