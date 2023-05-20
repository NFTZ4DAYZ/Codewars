function dbSort(a){
    let num = a.filter(el=> typeof el == 'number').sort((a,b)=> a- b);
    let words = a.filter(el => typeof el == "string").sort()
    return [...num, ...words]
  }