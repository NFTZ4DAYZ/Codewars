function reverse(n){
    let rev = 0;
    let last = 0;
    while(n>=1) {
      rev = Math.floor(rev*10 + (n%10));
      console.log(rev)
      n=n/10
    }
    return rev
  }
  