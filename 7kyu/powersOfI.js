function pofi(n){
    let i = (-1)**n;
    let one = '1'
    let two = 'i'
    let three = '-1'
    let four = '-i'
     n = (n + 1)/4;
    if(n%1 ==.25) return one;
    if(n%1== .5) return two;
    if(n%1 ==.75) return three;
    if(n%1 == 0) return four;   
  }