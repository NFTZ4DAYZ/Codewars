function mirror(data) {
    let ans = [];
    let hel= data.slice()
    let fir = hel.sort((a,b) => a - b)
   for(let i = fir.length - 1;i>= 0;i--) {
     ans.push(fir[i])
   }
    return fir.concat(ans.slice(1))
  }