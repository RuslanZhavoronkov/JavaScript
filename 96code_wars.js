const correct = (string) => {
  let oldStr = string;
  let str = "";
  for (let i = 0; i < oldStr.length; i++) {
    oldStr[i] === "5"
      ? (str += "S")
      : oldStr[i] === "0"
      ? (str += "O")
      : oldStr[i] === "1"
      ? (str += "I")
      : (str += oldStr[i]);
  }
  return str;
};
