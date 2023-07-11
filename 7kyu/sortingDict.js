function sortDict(dict) {
    let arr = []
    for(let key in dict) {
      arr.push([+key || key,+dict[key]])
    }
    return arr.sort( (a,b)=> b[1] - a[1])
  }