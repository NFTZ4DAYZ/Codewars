function eliminateUnsetBits(number) {
    let bin = number.replace(/0/g, '')
    let ans = 1;
    let count = 1;
    if(bin == '') return 0;
    bin = bin.split('').slice(0,bin.length-1)
    while(bin.length) {
      ans += 2**count;
      count++;
      bin = bin.slice(1)
    }
    return ans
  }