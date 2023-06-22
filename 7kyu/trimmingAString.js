function trim(str, size) {
    let len = str.length;
     if(len<=size){
      return str   
    }
    if(len <= 3 || size <= 3) {
      return str.slice(0,size) + '...'
    }
   
    if(len > size) {
      return str.slice(0,size-3)+'...'
    }
  }