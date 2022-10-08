// Alternate capitalization 


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let alpha = []
    let bravo = []
    for(let i = 0; i < s.length; i++) {
      if(i%2 != 0) {
        bravo.push((s[i]).toUpperCase())
        alpha.push((s[i]).toLowerCase())    
      }else {
        bravo.push((s[i]).toLowerCase())
        alpha.push((s[i]).toUpperCase())
      }
    }
    return [alpha.join(''),bravo.join('')]
  
  }