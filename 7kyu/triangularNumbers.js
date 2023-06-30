function isTriangular(t) {
    let ans = 1;
    let count = 2;
    let arr = [1];
    while(ans<=t) {
      ans+= count;
      arr.push(ans);
      count++; 
    }
  return arr.includes(t)
  }