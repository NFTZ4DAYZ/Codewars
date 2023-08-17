function shuffleIt(arr,...x){

    let count = x.length
    for(let i = 0;i< count;i++) {
      let temp1 = x[i][0];
      let temp2 = x[i][1];
      [arr[temp1],arr[temp2]] = [arr[temp2],arr[temp1]]
    }
    return arr
  }
  