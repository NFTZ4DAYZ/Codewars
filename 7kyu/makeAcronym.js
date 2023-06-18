function toAcronym(inp){
    return inp.split(' ').map(el=> el[0]).join('').toUpperCase();
  }