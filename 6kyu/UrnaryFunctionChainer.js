
function chained(functions) {
 
    return function (x) {
      for(let i = 0; i< functions.length;i++) {
       x = functions[i](x)  
      }
      return  x
    }
  }
  
  