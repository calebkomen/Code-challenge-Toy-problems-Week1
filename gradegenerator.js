//Generation of grade beetween 0-100
function gradeGeneratore(marks) {
    const grade = `Enter your ${marks}`;
    //marks to return A
    if (marks >= 79 && marks <=100){
      return "A";
    }
    //marks to return B
    else if (marks >= 60 && marks < 79) {
      return "B";
    }
    //marks to return C
    else if (marks >= 49 && marks < 60) {
      return "C";
    }
    //marks to return D
    else if (marks>= 40 && marks < 49) {
      return "D";
    }
    //marks less than 40 to return E
    else if (marks>=0 && marks <40){
      return "E";
    }
  }

  // promting output
  console.log(gradeGeneratore(marks)); 