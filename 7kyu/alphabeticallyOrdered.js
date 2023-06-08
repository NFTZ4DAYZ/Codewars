function alphabetic(s) {
    let t = s.split('').sort().join('')
    return s == t
   }