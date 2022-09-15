// Exclamation mark  

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let vowel = 'aeiouAEIOU'.split('')
    let result = ''
    for(let i = 0; i < s.length; i++) {
      if( vowel.includes(s[i]) ) {
        result += '!';   
      }else {    result += s[i]
      }
    }
    return result
    
    
  }

//   function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')  
//   }