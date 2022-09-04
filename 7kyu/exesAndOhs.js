// Exes and Ohs  


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 


// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let newArray = str.split("")
    console.log(newArray)
    let x = 0
    let o = 0
    let other = 0
    for (let i = 0; i < newArray.length; i++){
      if(newArray[i].toLowerCase() == "x"){
        x += 1
      } else if (newArray[i].toLowerCase() == "o"){
        o += 1
      } else {
        other += 1
      }
    }
    if (x == o){
      return true
    } else {
      return false
    }
}