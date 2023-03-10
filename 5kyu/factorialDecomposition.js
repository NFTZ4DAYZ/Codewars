function decomp(n) {
  
    function isPrime(num) {
      if(num%2== 0 || num%3 == 0) {
        return false;
      }
      let d = 5;
      while(d<= Math.sqrt(num)) {
        if(num%d == 0 || num%(d+2) == 0) {
          return false;
        }else {
          d+=6
        }
      }return true;
    }
    let primes = [2,3];
    let k = 5;
    while(k<= n) {
      if(isPrime(k)) {
        primes.push(k)
      }
      k+=2
    }
    let factor = '';
    for(let i = 0; i<primes.length;i++) {
      let N = n;
      let index = n;
      while(N>0) {
        index -= N%primes[i];
        N = (N - (N%primes[i]))/primes[i]
      }
      index /= primes[i] - 1;
      (index > 1) ? factor += primes[i] + "^" + index + ' * ' : factor += primes[i] + ' * ';
    }
    return factor.slice(0,factor.length - 3)
  }
  