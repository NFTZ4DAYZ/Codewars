function findScreenHeight(width, ratio) {
    ratio = ratio.split(':').map(el=> +el)
    let div = ratio[1]/ratio[0]
    let h = width*div
    return`${width}x${h}` 
  }