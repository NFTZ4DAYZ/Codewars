function minimumNumber(numbers){
    let red = numbers.reduce( (acc,c) => acc + c,0);
     for(let i = 0;;i++) {
       if(isPrime(red + i)) {
         return i
       }
     }
   }
   
   
   function isPrime(n) {
     for(let i = 2;i<Math.sqrt(n);i++) {
       if(n%i == 0) {
         return false;
       }
     }
     return n!==1;
   }