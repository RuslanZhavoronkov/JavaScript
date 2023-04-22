//Type equal null
var test10 = null;
console.log(typeof test10);
//Console return object

function isOpposite(s1,s2){
  
    //coding here...
    for (var i = 0; i < s1.length; i++) {
  
      if (s1[i].toUpperCase() == s2[i].toLowerCase()) {
        return "true";
      }  else {
        return "false";
      }
      
    }
    
  }