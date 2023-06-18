function sabb(s, val, happiness){
    let sum = 0;
      let word = 'sabbatical'
        s = s.toLowerCase()
      for(let i= 0;i<s.length;i++){
        if(word.includes(s[i])) {
          sum++
        }
      }
    return sum + val + happiness > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy."
  }