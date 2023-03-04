function differenceOfSquares(n){
    let sqr = 0
    let sum = 0
    for(let i = 1; i<=n;i++) {
      sum+=i
      sqr+=i**2
    }
    return sum**2 - sqr
  }