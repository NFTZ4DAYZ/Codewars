function arithmeticSequenceElements(a, d, n){
	let result = [a];
  while(n > 0) {
    result.push(a += d)
    n--;
  }
 result.pop()
  return result.join(', ');
  }