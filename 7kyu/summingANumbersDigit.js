// Summing a numbers Digit 


// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let result = 0
    let arr = number.toString().split('')
    if(arr[0] === '-') {
      arr.shift()
    }
    let ans = arr.reduce( (acc, c) => Number(acc) + Number(c), 0)
    return ans
  
  }
  

  function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
        sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}