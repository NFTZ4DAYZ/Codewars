function meeting(x){
    let result;
  for(let el of x) {
    if(el== 'O') {
      result = x.indexOf(el)
    }
  }
    return (result === undefined) ? 'None available!' : result;
  }