// Sort sort  



// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let result = ''
       let sorted = s.sort()
   
    let arr = sorted[0].split('')
    for(let i = 0; i < arr.length; i++) {
      result += arr[i] + '*' + '*' + '*'
      
    }
  
  return result.slice(0,-3)
  
  }


//   function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }