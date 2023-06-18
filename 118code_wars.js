const Ball = class {
  // your code goes here
  constructor(ballType) {
    ballType === "super"
      ? (this.ballType = ballType)
      : (this.ballType = "regular");
  }
};

class Gall {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}
