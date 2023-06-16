function remove (string) {
    let spl = string.split('!').length - 1
    return string.replace(/!/g, '') + '!'.repeat(spl)
  
  }