function eachCons(array, n) {
    let ans = [];
    for(let i = 0;i<array.length;i++) {
      ans.push(array.slice(i,n+i))  
    } 
    return ans.filter(el=> el.length == n)
  }