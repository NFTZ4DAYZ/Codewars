function isPrime(n) {
    if (n===1){
         return false;
      }else if(n === 2){
         return true;
      }else{
         for(let x = 2; x < n; x++){
            if(n % x === 0){
               return false;
            }
         }
         return true;
      };
   };
   function numPrimorial(num){
      if(num === 0){
         return 0;
      }
      let count = 1, flag = 3;
      let prod = 2;
      while(count < num){
         if(isPrime(flag)){
            prod *= flag;
            count++;
         };
         flag++;
      };
      return prod;
   };