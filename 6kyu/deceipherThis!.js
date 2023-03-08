function decipherThis(str) {
    return str
    .split(' ')
    .map(el => String.fromCharCode(el.replace(/[^0-9]/g, '')) + el.replace(/[^a-z]/ig, ''))
    .map(el=> el.length < 3 ? el : el.slice(0,1) + el.slice(-1) + el.slice(2, el.length - 1) + el.slice(1,2))
    .join(' ')
  }
  
  
  