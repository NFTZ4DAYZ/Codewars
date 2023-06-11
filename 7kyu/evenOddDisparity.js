function solve(a){
    let filt = a.filter(el=> typeof el == 'number')
    return filt.filter(el=> el%2 == 0).length - filt.filter(el=> el%2 != 0).length
  };