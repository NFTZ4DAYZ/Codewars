function gordon(a){
    a = a.toUpperCase().replace(/a/gi, '@')
    .replace(/[eiou]/gi, '*')
      .split(' ')
        .map(el=> el + '!!!!')
           return a.join(' ')
  }