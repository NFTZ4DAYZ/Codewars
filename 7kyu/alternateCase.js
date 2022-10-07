// Alternate case 

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let result = ''
    s = s.split('')
    for(let i = 0; i < s.length; i++) {
      if(s[i] == s[i].toLowerCase()) {
        result += s[i].toUpperCase()
      }else {
        result += s[i].toLowerCase()
      }
    }
    return result  
  }