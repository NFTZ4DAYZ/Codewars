function quadratic(x1, x2){
    let ans = [1];
    let two = -x1 + (-x2);
    let three = -x1*(-x2)
    return [...ans,two,three]
  }