function howManySmaller(arr,n){
    return arr.map(el=> el.toFixed(2)).filter(x=>+x < n).length;
  }
  