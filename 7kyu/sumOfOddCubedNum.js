// Sum of odd cubed numbers 

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if(arr.filter( element => typeof(element) == 'number').length == arr.length) {  
      return arr
    .map( el=> el**3)
    .filter( el=> el%2 != 0)
    .reduce( (acc,c) => acc + c,0)    
    }else {
      return undefined
    }
  }
  
  