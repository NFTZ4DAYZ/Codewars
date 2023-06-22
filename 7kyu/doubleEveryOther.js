function doubleEveryOther(a) {
    return a.map( (el,idx)=> idx%2 != 0 ? el*2 : el);
  }