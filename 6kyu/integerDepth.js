function computeDepth (x){
    let arr = [];
      for(let i = 1;; i++) {
           arr.push((x*i).toString().split(''))   
        if([... new Set([].concat(...arr))].length === 10) return i
      }
    }
    