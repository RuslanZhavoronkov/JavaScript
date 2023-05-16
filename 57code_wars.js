function greet (name, owner) {
    // Add code here
  if (name === owner) {
    return "Hello boss";
  } else if (name !== owner) {
    return "Hello guest";
  } else {
    return;
  }
  }