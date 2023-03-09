function upArray(arr){
    if(arr.length < 1) return null;
    for(let item of arr) if(item < 0 || item > 9) return null
  
    for(let i = arr.length - 1; i >= 0; i--) {
      arr[i]++;
      if(arr[i] < 10) break;
      else arr[i] = 0;
      
      if(i == 0) arr.unshift(1);
    }
    
    return arr;
  }
  