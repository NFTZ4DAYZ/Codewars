function balance(left,right){
    let lefty = 0
    let righty = 0
    for(let i = 0; i <left.length;i++) {
      if(left[i] == '!') {
        lefty+=2
      }else {
         lefty +=3
      }
    }for(let j = 0; j < right.length;j++) {
      if(right[j] == '!') {
        righty+=2
      }else {
        righty+=3
      }
    }
      if(lefty == righty) {
        return 'Balance'
      }else if(lefty > righty) {
        return 'Left'
      }else {
        return 'Right'
      }
    
  }