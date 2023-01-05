esreveR  

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

function reverse(array) {
  
    let rev = [];
   for(let i = array.length - 1; i  >= 0;i--) {
     rev.push(array[i])
   }
  
   return rev
 
 }