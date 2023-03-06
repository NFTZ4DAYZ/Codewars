function isLucky(n) {
    n = n.toString().split('').reduce( (acc,c) => +acc + + c) 
    return n % 9 == 0 || n == 0 ? true : false;
  }