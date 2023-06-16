unction showBits (n) {
    let arr = Array(32).fill(0)
    if(n >= 0) {
      for(let i = 0;i< arr.length;i++) {
       if(2**(31 - i) > n) {
         
         arr[i] = 0;
       } else {
         arr[i] = 1;
          n-= 2**(31-i)
       }
    
        
      }
      
    }else {
      
     n = Math.abs(n) - 1;
       for(let i = 0;i< arr.length;i++) {
       if(2**(31 - i) > n) {
         
         arr[i] = 1;
       } else {
         arr[i] = 0;
          n-= 2**(31-i)
       }
      }
    }
      return arr  
    
      }