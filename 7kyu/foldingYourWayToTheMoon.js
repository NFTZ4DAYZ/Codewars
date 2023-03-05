function foldTo(distance) {
    let ans = 0
    if(distance < 0) {return null}
   for(let i = .0001;i<distance;i+=i) {
     ans++
   }
    return ans
  }