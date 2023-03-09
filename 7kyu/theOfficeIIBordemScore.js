function boredom(staff){
    let result = 0;
    let obj = {  
  accounts:  1,
  finance:  2,
  canteen:  10,
  regulation:  3,
  trading: 6,
  change: 6,
  IS:  8,
  retail:  5,
  cleaning: 4,
  ['pissing about']: 25    
    };
    for(let key in staff) {
     let object = staff[key];
      for(let key in obj) {
        if(object === key) {
         result+= obj[key]
        }
      }
    }
  return result <= 80 ? 'kill me now' : (result < 100 && result > 80) ? 'i can handle this' : 'party time!!'
    
  }