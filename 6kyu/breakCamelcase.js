// Break Camelcase   


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    var newString = '';
    for(letter of string) {
      if(letter == letter.toUpperCase() ) {
        newString += ' ';
        newString += letter;
      }else {
        newString += letter;
      }
    }
    return newString;
      
  }
  

//   function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }