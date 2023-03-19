function unluckyDays(year){
    let unlucky = 0;
    for(let x = 0;x<12;x++) {
      let luck = new Date(year, x, 13).getDay() === 5 ? 1 : 0;
      unlucky += luck
    }
    return unlucky
  }
  
  
  