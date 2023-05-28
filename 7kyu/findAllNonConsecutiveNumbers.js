function allNonConsecutive (arr) {
    let ans = [];
      arr.forEach( (n,i)=> (i > 0 && n - 1 !== arr[i-1]) ? ans.push({i, n}) : false);
     return ans
   }