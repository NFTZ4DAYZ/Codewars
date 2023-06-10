function killer(sus, dead) {
    let ans = '';
    for(let key in sus) {
      for(let i = 0;i<dead.length;i++) {
        if(sus[key].includes(dead[i])) {
          ans+= key + ' '
      } 
    }}
      return ans.trim().split(' ')[0]
  }