function thirt(n) {
    let repeat = [1,10,9,12,3,4]
   let arr = String(n).split('').reverse()
   let reduced = arr.reduce( (acc,c,i) => acc + c*repeat[i%repeat.length], 0)
  return reduced === n ? n : thirt(reduced);
}