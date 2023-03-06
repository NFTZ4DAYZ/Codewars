function explode(s) {
    let result =  []
    s = s.split('')
    for(let i= 0;i < s.length;i++) {
      result.push(s[i].repeat(+s[i]))
    }
    return result.join('')
  }