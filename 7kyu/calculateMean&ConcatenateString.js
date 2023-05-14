function mean(lst){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let alpha = lst.filter(el=> alph.includes(el)).join('')
    let beta = lst.filter(el=> !alph.includes(el)).reduce((acc,c)=> acc + +c,0)/10
    return [beta,alpha]
  }