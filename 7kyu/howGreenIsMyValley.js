function makeValley(arr) {
    let sorted = arr.sort((a,b) => b- a)
     let left = [];
      let right = [];
        for(let i = 0;i< sorted.length;i++) {
         if(i%2 == 0) left.push(sorted[i])
          else{ right.push(sorted[i])}
            }
          left = left.sort((a,b) => b - a)
            right = right.sort((a,b) => a - b)
              return left.concat(right)    
}