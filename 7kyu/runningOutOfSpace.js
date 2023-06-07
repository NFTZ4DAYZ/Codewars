function spacey(array){
    let arr = [];
      let helper = array.join('')
    while(array.length > 0){
      arr.unshift(helper)
      helper = helper.slice(0,helper.length - array[array.length - 1].length)
      array.pop()
    } 
    return arr
  }