// Sum of angles 
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.



function angle(n) {
    if(n < 2) {
      return 0
    }else if(n == 3) {
      return 180
    }else {
      return 180 + (n - 3) * 180
    }
  }