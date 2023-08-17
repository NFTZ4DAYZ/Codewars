function paul(x){
    let count = 0;
    for(let i = 0;i<x.length;i++) {
      if(x[i] == 'eating') count++;
      if(x[i] == 'kata') count+=5;
      if(x[i] == "Petes kata") count += 10;
    }
    return count < 40 ? 'Super happy!' : count < 70 ? 'Happy!' : count < 100 ? 'Sad!' : 'Miserable!'
  }