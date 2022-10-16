// Rainfall 


// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
// Examples:
// mean("London", data), 51.19(9999999999996) 
// variance("London", data), 57.42(833333333374)
// Notes:
// if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

// Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

// Shell

// Shell tests only variance.
// In "function "variance" $1 is "data", $2 is "town".
// A ref: http://www.mathsisfun.com/data/standard-deviation.html

// data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com

function mean(town, strng) {
    let arr = strng.split('\n')
    let first = town.slice(0,2)
    let city = []
     for(let i = 0; i < arr.length; i++) {
      if(arr[i].slice(0,2) == first ) {
        city.push(arr[i])
      }
    }
     city = city.toString()
  let start = city.indexOf(':')
    let cityName = city.slice(0,start) 
     city = city.slice(start + 1)
   let num = city.replace(/[A-Za-z]/g, '').split(',').map( el => Number(el))
   
    let result = num.reduce( (acc,c) => acc + c)/num.length 
    if(town.includes(cityName) && strng.includes(town)) {
      return result
    }else {
      return -1
    }
     } 
  function variance(town, strng) {
        let arr = strng.split('\n')
    let first = town.slice(0,2)
    let city = []
     for(let i = 0; i < arr.length; i++) {
      if(arr[i].slice(0,2) == first ) {
        city.push(arr[i])
      }
    }
     city = city.toString()
     let start = city.indexOf(':')
     let cityName = city.slice(0,start)
     city = city.slice(start + 1)
   let num = city.replace(/[A-Za-z]/g, '').split(',').map( el => Number(el))            
    let mean = num.reduce( (acc,c) => acc + c)/num.length
    let vari = 0
    for(let i = 0; i < num.length; i++) {
      vari += ((num[i] - mean)**2)/(num.length) 
    }
   if(town.includes(cityName) && strng.includes(town)) {
      return vari
    }else {
      return -1
    }
  }
  