function evenOrOdd(str) {
    let even = str.split('').filter(el=> el%2 == 0).reduce((acc,c)=> acc + +c,0)
    let odd = str.split('').filter(el=> el%2 != 0).reduce((acc,c)=> acc + +c,0)
    return even > odd ? "Even is greater than Odd" : even == odd ? 'Even and Odd are the same' : 'Odd is greater than Even'
  }