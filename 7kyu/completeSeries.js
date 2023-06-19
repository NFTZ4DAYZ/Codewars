function completeSeries(arr) {
    let ans = [];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for(let i = 0;i<= max;i++) {
      ans.push(i)
      }  
     return arr.filter(el=> arr.indexOf(el) != arr.lastIndexOf(el)).length == 0 ? ans : [0];
    }