function twoHighest(arr) {
    let result = []
    if(arr.length < 2) return arr
    arr = arr.sort( (a,b)=> b - a)
    
    result.push(arr[0])
   for(let i = 1;i<arr.length;i++) {
       if(arr[i] != arr[i-1]) result.push(arr[i])
   }
    
    return [result[0],result[1]]
  }