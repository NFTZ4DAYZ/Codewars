function tailSwap(arr) {
    let one = arr[0].split(':')
      let two = arr[1].split(':')
        return [one[0]+':' + two[1],two[0] + ':' + one[1]]
  }