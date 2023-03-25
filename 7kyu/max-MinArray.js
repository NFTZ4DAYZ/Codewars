function solve(arr){
    let result = [];
  arr = arr.sort( (a,b) => b - a);
  let b = 0
  let e = arr.length - 1
  
  if(arr.length % 2 == 1) {
    while(b != e) {
      result.push(arr[b])
      result.push(arr[e])
      b++;
      e--;
    }
     result.push(arr[e])
  }
  if(arr.length%2 == 0) {
    while((e<b) != 1) {
      result.push(arr[b])
      result.push(arr[e])
      b++;
      e--;
      
    }
  }
    
  return result
}