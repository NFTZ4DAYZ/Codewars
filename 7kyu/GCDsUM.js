function solve(s,g){
    return s%g == 0 ? [g,s-g] : -1;
  }