// seven ate nine 


// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


function sevenAte9(str) {
    let strng = str.split('')
    let ans = str[0]
    for(let i = 1; i < str.length;i++){
        ans += ( (strng[i] == '9') && (strng[i + 1] == '7') && (strng[i - 1] == '7') ) ? '' : str[i]
       
      }
    return ans || ''
  }