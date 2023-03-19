function deepCount(a){
    return a.reduce( (acc,c)=> Array.isArray(c) ? acc += deepCount(c) : acc ,a.length)
  }
  