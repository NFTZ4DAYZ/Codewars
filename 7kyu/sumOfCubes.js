// Sum of Cubes 

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


function sumCubes(n){
    let count = 0
    let result = 0
    while(count <= n) {
      result += count**3
      count++
    }
    return result
  }