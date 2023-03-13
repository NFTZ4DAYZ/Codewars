var isPP = function(n){
  
    const sqrt = Math.sqrt(n);
    let i = 2, j=2; 
    while( i <= sqrt) {
      const cP = Math.pow(i,j);
      
      if(cP === n) {
        return [i,j];
      }
      else if(cP > n) {
        i++;
        j=2;
      }
      else {
        j++;
      }
    }
    return null;
   }
  
  
  