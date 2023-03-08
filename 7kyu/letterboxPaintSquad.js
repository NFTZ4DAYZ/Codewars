var paintLetterboxes = function(start, end) {
    let obj = {};
    let arr = []
    let result = []
   for(let i = start;i<=end;i++) {
     let help =i.toString().split('')
     for(let j = 0;j < help.length;j++) {   
       arr.push(help[j])
  }}
    for(let el of arr) {
        if(!obj[el]) {
       obj[el] = 1
     }else {
       obj[el]++
     }}
    for(let i = 0; i<= 9; i++) {
      if(obj[i]) {
        result.push(obj[i]);      
      }else {result.push(0)}
    }
    return result   
    }
    
  
    