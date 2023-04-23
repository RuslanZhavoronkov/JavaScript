//Решение первый вариант

function noSpace(x){
    var result = ""
    for(var i = 0; i < x.length; i++){
      if(x[index] !== " "){
        result += x[i];
      }
    }
    return result;
  }

  //Решение второй вариант
  function noSpace(x){
    return x.split(' ').join('');
}

noSpace("1 2 3");