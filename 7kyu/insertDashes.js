function insertDash(num) {
    let result = [];
    num = String(num).split('').map(Number)
    for(let i = 0; i < num.length; i++) {
  if(num[i] % 2 !== 0 && num[i + 1] % 2!== 0){
    result.push(num[i])
    result.push('-')
    
  }else {
    result.push(num[i])
  }
    }
   
       if(result[result.length-1]=='-') result.pop()
      return result.join("")
  }
  
  