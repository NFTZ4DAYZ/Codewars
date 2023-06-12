const multiply = (a,b) => {
    const stack = [];
    a = a.split('').reverse();
    b = b.split("").reverse();
    
    for(let i = 0; i<a.length;i++) {
      for(let j = 0;j<b.length;j++) {
        let m = a[i]*b[j];
        let s = stack[i+j];
          stack[i+j] = s ? s + m: m;
      }
    }
    
    for(let i = 0; i<stack.length;i++) {
      
      let move = Math.floor(stack[i]/10);
      stack[i] = stack[i]%10;
      if(stack[i+1]) stack[i+1] += move;
      else if(move >0) stack[i+1] = move;
    }
      
    return stack.reverse().join('').replace(/^(0(?!$))+/, '');
  }
  
  
  
  