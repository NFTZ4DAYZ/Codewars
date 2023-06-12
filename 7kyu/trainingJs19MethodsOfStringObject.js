function alienLanguage(str){
    return str.split(' ').map(el=> el.slice(0,el.length-1).toUpperCase() + el.slice(-1).toLowerCase()).join(' ')
  }