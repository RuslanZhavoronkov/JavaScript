function checkObj(obj, checkProp) {
    // Only change code below this line
  var pepe = obj.hasOwnProperty(checkProp);
  if (pepe == true) {
    return obj[checkProp];
  } else{
    return "Not Found";
  }
  
  
  
  
    // Only change code above this line
  }