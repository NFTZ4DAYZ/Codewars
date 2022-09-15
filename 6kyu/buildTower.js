// Built tower 

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(n) {
    let space, star, result = [];
   for(let i = 1 ; i <= n; i++){
      space = ' '.repeat(n - i);
      star = '*'.repeat(2 * i - 1);
      result.push(`${space}${star}${space}`)  
      } 
     return result
  }