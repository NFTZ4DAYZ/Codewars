function stringTransformer(str) {
    str = str.split('').map(el=> el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()).join('')
    return str.split(' ').reverse().join(' ')
  }