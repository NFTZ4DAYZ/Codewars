var isSquare = function(arr){
    return  arr.length ? arr.filter(el=> Math.sqrt(el)%1==0).length == arr.length : undefined;
  }