function save(sizes, hd) {
    var count = 0;
    var files = 0;
   
      for(var i =0;i<sizes.length;i++){
        if(files < hd) {
        
          files += sizes[i]
          count++
        }  
      }
    if (files > hd) return count - 1
    return count
  }
  
  