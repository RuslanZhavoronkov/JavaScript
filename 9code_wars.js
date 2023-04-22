function array(arr){
    //Good luck
      var newArray = arr.split(",");
      if (newArray.length <= 2) {
        return null;
      } else {
       newArray.shift();
       newArray.pop();
       return newArray.join(" ");
        
      }
    
      
     
      }
    
        