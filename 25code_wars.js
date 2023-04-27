function abbrevName(name){

    // code away
 var newStr = "";
 var lastName = "";
 for (var i = 0; i < name.length; i++) {
 if (name[i] === " ") {
     name[i] = "."
     var index = name.indexOf(name[i]);
     lastName = name[i] + (name[index + 1]).toUpperCase;
     
 }
   
   
   
 }
 return newStr[0].toUpperCase() + lastName;
}