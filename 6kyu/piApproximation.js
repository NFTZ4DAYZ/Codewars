function iterPi(epsilon) {
	let pi = 0;
  let it = 0;
  let factor = 1;
  let div = 1;
  while(Math.abs(Math.PI - (pi*4)) >= epsilon) {
    pi += factor/div;
    factor = - factor;
    div += 2;
    it += 1;
  }
  return [it, +(pi*4).toFixed(10)]
 
}

