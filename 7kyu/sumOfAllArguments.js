function sum(x) {
  
    let args= [...arguments]
    return args.reduce( (acc,c) => acc + +c);
    
  }