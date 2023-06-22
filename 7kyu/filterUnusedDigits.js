function unusedDigits(arr) {
    let arguArray = Array.from(arguments);
   let num = [0,1,2,3,4,5,6,7,8,9]
    arguArray=arguArray.join('').split('').map(Number)
    let ans = []; 
    for(let i = 0;i< num.length;i++) {
      if(!arguArray.includes(num[i])) ans.push(num[i])
    }
    return ans.join('')  
  }