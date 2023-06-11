const prevMultOfThree = n => {
    n = n.toString().split('').map(Number)
    let ans = 0;
      while(n.toString().length) {
        if(+n.join('')%3==0) return +n.join('');
        n.pop()     
      }
    return null;  
  }