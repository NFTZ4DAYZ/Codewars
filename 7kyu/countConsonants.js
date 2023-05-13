function consonantCount(str) {
    let vowel = 'bcdfghjklmnpqrstvxwyz'
     return str.toLowerCase().split('').filter(el=>vowel.includes(el)).length
  }