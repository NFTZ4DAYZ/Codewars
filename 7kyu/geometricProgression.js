function geometricSequenceElements(a, r, n){
    let ans = [a,a*r]
    let el = a*r
   
    for(let i = 2;i<n;i++) {
      ans.push(el*r)
      el = el*r
    }
    return ans.join(", ") 
  }