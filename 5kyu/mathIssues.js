
Math.round = function(number) {
    if(number%1 < .5) { return number -(number%1)
     
    }else {return number + (1 - number%1)}
  };
  Math.ceil = function(number) {
   if(number != 0 && number%1 != 0) {
     return number + ((1 - number%1))
   }else if(number != 0) {
     return number
   }else {
     return 0
   }
  };
  Math.floor = function(number) {
    return number - number%1
  };