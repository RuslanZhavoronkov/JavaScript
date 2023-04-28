function abbrevName(name){

    var index = name.indexOf(" ");
    var inits = name[0].toUpperCase() + "." + name[index + 1].toUpperCase();
    
    return inits;
  }