function product (string) {
    string = string.split('')
    let result = 0
    let sec = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] == '?')  {
        result += 1;
      }
     
      }
      for(let j= 0; j < string.length; j++) {
        if(string[j] == '!') {
          sec++
        
      }
    } 
      return result*sec
  }