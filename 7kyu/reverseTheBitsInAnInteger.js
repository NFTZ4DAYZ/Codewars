function reverseBits (n) {
    let rev = n.toString(2).split('').reverse().join('')
   return parseInt(rev,2 )
  }