function replaceAll(seq, find, replace) {
    if(seq.length == 0) return []
    if(typeof seq === 'string') {
      return seq.split('').map(el=> el == find ? el = replace : el ).join('')
    }
    return seq.map(el=> el == find ? el = replace : el)
  }