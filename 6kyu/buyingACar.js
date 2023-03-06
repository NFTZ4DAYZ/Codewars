function nbMonths(sPO, sPN, sM, pL){
    let total = sPO
    let months = 0;
    while(total < sPN) {
      total += sM;
      total -= sPO*(pL/100)
      sPN -= sPN*(pL/100)
      sPO -= sPO*(pL/100)
      months++;
      months%2!= 0 ? pL+= .5 : pL;
    }
    return [months,Math.round(total - sPN)]
  }