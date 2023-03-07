function prefill(n, v) {
    let l = parseInt(n)
     if(Number.isNaN(l) || l<0 || n%1!==0) {
       throw new TypeError( `${n} is invalid`)
     }
      if(l===0) {
        return []
      }
      return  new Array(n).fill(v) 
    }