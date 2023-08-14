function twoArePositive(a, b, c) {
    let ans = 0;
    if(a > 0) ans += 1;
    if(b>0) ans +=1;
    if(c>0) ans+= 1;
    return ans == 2 ? true : false;
  }