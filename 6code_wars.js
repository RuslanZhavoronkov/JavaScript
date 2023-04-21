function boolToWord( bool ){
    if (bool === true) {
      return "Yes";
    } 
    return "No";
  }

  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  let boolToWord = bool => bool ? 'Yes' : 'No';