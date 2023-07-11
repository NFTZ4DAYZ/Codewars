function ArithmeticSequenceSum(a, r, n) {
    let count = a
    for(let i = 0;i<n - 1;i++) {
      count += a + r*(i+1)
    }
    return count;
    }