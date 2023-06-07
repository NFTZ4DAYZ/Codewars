function broken(x){
    return x.split('').map(el=> el == 0 ? 1 : 0).join('')
  }