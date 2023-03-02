function stantonMeasure(int) {
    let stan = 0
    let result = 0
    for(let i = 0; i < int.length; i++) {
      if(int[i] ==  1) {
        stan++
      }
    }
    for(let j = 0; j < int.length; j++) {
      if(int[j] == stan) {
        result++
      }
    }
    return result
  }
    