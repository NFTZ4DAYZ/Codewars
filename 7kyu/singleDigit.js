function singleDigit(n) {
    while(String(n).length > 1) {
      n = n.toString(2).split('').filter(el=> el == 1).length
    }
      return n;
    }