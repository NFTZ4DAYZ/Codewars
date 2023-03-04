function multiples(m, n){
    let result = [];
    let count = 0
    while(count < m) {
      result.push(m*n) 
       m--
      }
       return result.reverse()
  }