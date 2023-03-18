function moveTen(s){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let sec = 'klmnopqrstuvwxyzabcdefghij'
  s = s.split('').map( (el,idx) => el = sec[alph.indexOf(el)])
    return s.join('')
    }