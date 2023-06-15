function convertHashToArray(hash){
    let arr = [];
    
    for(let key in hash) {
      arr.push([key,hash[key]])
    }
    return arr.sort()
  }