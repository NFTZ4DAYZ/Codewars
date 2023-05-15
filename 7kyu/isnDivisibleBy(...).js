function isDivisible(x){
    let ans = 0
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[0]%arguments[i] == 0) {   ans++
      }
    }
    return ans == arguments.length - 1 ? true : false;
  }