// Is there a vowel in there 



// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    let result = [];
    let vow = 'aeiou'.split('')
    let vowel = 'aeiou'.split('').map( el => el.charCodeAt(el))
    for(let i = 0; i < a.length; i++) {
       if(vowel.includes(a[i])) {
         result.push(vow[vowel.indexOf(a[i])])
       }else result.push(a[i])
  }
  return result
  }