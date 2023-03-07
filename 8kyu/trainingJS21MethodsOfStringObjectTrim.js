function fiveLine(s){
    let ans = []
    s=s.trim()
    for(let i = 1; i<=5;i++) {
      ans.push(s.repeat(i)+'\n')
    }
  return ans.join('').trim()
  }