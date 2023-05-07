var filterLucky=x=>{
    let ans = [];
      x = x.map(el=> String(el))
      for(let i = 0;i<x.length;i++) {
        if(x[i].includes('7')) {
          ans.push(x[i])
        }
      }
      return ans.map(el=> +el)
    }