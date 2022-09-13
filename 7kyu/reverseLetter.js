// Reverse letter   

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    let arr = str.split('').reverse()
    let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = []
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < alph.length; j++) {
        if(arr[i] == alph[j] ) {    
         result.push(arr[i])
      }
      }
    } 
    
    return result.join('')
    
    
  }

//   reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');