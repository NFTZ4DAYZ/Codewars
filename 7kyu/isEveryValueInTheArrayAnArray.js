function arrCheck(value) {
    let result = true;
    for(let i = 0;i<value.length;i++) {
      if(!Array.isArray(value[i])) {
          result = false;}
    }
    return result
  }