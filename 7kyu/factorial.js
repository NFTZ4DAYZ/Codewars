// Factorial  

// write function for factorial

function factorial(n){
    let result = 1
    if(n === 0) {
      return 1
    }else {
    for(let i = 1; i <= n; i++) {
      result *= i
    }
      }
    return result
  }

//   function factorial(n){
//     let answer = 1;
    
//     while (n > 0) {
//       answer *= n;
//       n--;
//     }
    
//     return answer;
//   }