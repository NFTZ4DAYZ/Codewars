function sumIntervals(intervals) {
    intervals =  intervals.sort(function(a,b) { return a[0] - b[0]})
    
    intervals = intervals.reduce( function(acc,c,idx,arr) {
      const ant = arr[idx - 1];
      if(arr.length > 1 && ant !== undefined) {
        if(c[0] < acc[acc.length - 1]) {
          if(c[1] >= acc[acc.length - 1]) {
            acc[acc.length - 1] = c[1]
          }
        }else {acc.push(...c)}
      
      } else {acc.push(...c)}
      return acc;
    }, []);
    let result = 0;
    for(let i = 0; i<intervals.length - 1;i+=2) {
      result+= (intervals[i+1] - intervals[i])
  }
    return result
  }