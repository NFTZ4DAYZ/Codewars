// divide and conquer 


// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
    let uint = x.filter( el => typeof(el) === 'number').reduce( (acc,c) => acc + c,0)
    let stint = x.filter( el => typeof(el) === 'string').reduce( (acc,c) => acc + +c,0)
    return uint - stint
    
  }