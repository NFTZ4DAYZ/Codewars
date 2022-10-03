// Dashatize it 

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


function dashatize(num) {
    let result = ''
          if(isNaN(num)){
      return 'NaN'
    }
    num = String(num).split('')
    if(num[0] == '-') {
      num.shift()
    }
    for(let i = 0; i < num.length; i++) {
      if(Number(num[i]) % 2 == 0) {
        result += num[i]
      }else if(num[i]%2 != 0) {
        result += '-' + num[i] + '-';
      }
    }
    result = result.split('')
    if(result[0] == '-') {
      result.shift()
    }
    if(result[result.length - 1] == '-'){
      result.pop()
             }
    return result.join('').replace(/[-]{2}/g,"-")
  }