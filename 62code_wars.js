function getGrade (s1, s2, s3) {
    // Code here
    var midNum = (s1 + s2 + s3)/3;
    if (midNum >= 90 && midNum <= 100) {
      return "A";
    } else if (midNum >= 80 && midNum <= 90) {
      return "B";
    } else if (midNum >= 70 && midNum <= 80) {
      return "C";
    } else if (midNum >= 60 && midNum <= 70) {
      return "D";
    } else if (midNum >= 0 && midNum <= 60) {
      return "F";
    }
  } //возвращает среднее число