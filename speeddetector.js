//speeddetector
function speedDetector(speed) {
    //creates variable that stores 70 as speedlimit
    const speedLimit = 70;
    //creates variable that stores 5 as km points
    const kmPerPoint = 5;
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
  //when speed is below 70
    if (speed <= speedLimit) {
      return "Ok";
    } 
    //when demerit points is exceeding 12
    else if (points >12) {
        return "License suspended";
      } 
      // when demerit points is not exceeding 12
    else {
        return  "Points:",points;
      }
    }
  
  console.log(speedDetector("speed"))