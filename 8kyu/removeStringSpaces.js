// Remove string spaces



// Simple, remove the spaces from the string, then return the resultant string.








function noSpace(x){
  return x.split(' ').join('')
  

}



// function noSpace(x){
//     var result = ""
//     for(var index = 0; index < x.length; index++){
//       if(x[index] !== " "){
//         result += x[index];
//       }
//     }
//     return result;
//   }