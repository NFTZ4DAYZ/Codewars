function maxGap (numbers){
    let sort = numbers.sort( (a,b) => b - a)
  
    let arr = [];
    for(let i = 0; i< sort.length -1;i++) {
      arr.push(numbers[i] - numbers[i+1])
    }
    return Math.max(...arr)
   
  }