function pyramid(balls) {
    let count = 1;
    let result = 1;
    
    while(balls>0) {
      balls = balls - (result + count);
      count++;
    }
    return count - 1;
   
    }