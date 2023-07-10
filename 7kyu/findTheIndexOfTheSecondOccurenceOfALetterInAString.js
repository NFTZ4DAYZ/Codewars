function secondSymbol(s, symbol) {
    let first = s.indexOf(symbol)
    if(s.indexOf(symbol) == s.lastIndexOf(symbol)) return -1;
    let len = s.length
    s = s.slice(first + 1,s.length)
    return len - s.length + s.indexOf(symbol)
  }