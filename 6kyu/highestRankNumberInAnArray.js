// Highest rank number in an array 


// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let count = {}
    for(let i = 0; i < arr.length; i++) {
      if(!count[arr[i]]) {
        count[arr[i]] = 1
      }else {
        count[arr[i]]++
      }
    }
      let countMax = 0
      let countVal = 0
      for(let key in count) {
        if(countMax <= count[key]) {
          countVal = Math.max(key,countVal)
          countMax = Math.max(count[key],countMax)
        }
      }  
      return countVal
    }