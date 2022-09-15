// Primes in Numbers 

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    var newArr = [],obj = {},str = '';
    cal(n);
    function cal(n){
      if(n > 1){
        for(var i = 2;i <= n ;i++){
          if(n%i == 0){   
            newArr.push(i);
            cal(n/i);
            return true; 
          }
        }
      }
      else{
        return true;
      }
    }
    newArr.map(function(x){
      obj[x] ? obj[x]++ : obj[x] = 1;
    });
    for (var item in obj) {
      obj[item] == 1 && (str += '('+ item +')')
      obj[item] > 1 && (str += '('+item +'**'+ obj[item]+')')
   }
     return str;
}