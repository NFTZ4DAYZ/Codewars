// What is between  



// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


function between(a, b) {
    let arr = []
    for(let i = b; i >= a; i--) {
      arr.push(i)
    }
    return arr.reverse()
  }


//   function between(a, b) {
//     return Array(b - a + 1).fill(1).map((_, i) => a + i)
//   }