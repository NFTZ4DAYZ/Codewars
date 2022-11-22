// Substituting Variables Into Strings 


// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"


function solution(value){
    if(String(value).length == 0) return 'Value is 00000'
    else if(String(value).length == 1) return `Value is 0000${value}`
    else if(String(value).length == 2) return `Value is 000${value}`
    else if(String(value).length == 3) return `Value is 00${value}`
    else if(String(value).length == 4) return `Value is 0${value}`
    else return `Value is ${value}`
  
  }      