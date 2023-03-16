function crap(x, bags, cap){
    let result = 0;
    let d = 0;
    let n = x;
    for(let i = 0;i< x.length;i++) {
      let m  = [...n[i]]
      for(let j = 0;j<m.length;j++) {
        if(m[j] == 'D') {
          d++
        }
        if(m[j] == '@') {
          result++
        } 
      }
    }
    return d < 1 && result <= bags*cap ? "Clean" : d < 1 && result > bags*cap ? "Cr@p" : 'Dog!!'
  }