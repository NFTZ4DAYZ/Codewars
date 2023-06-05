function evenChars(string) {
    if(string.length > 100 || string.length <2) return 'invalid string'
      return string.split('').filter( (el,idx)=> idx%2 != 0)
  }