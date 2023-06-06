function rakeGarden(garden) {
    let ans = ''
      garden = garden.split(' ')
       for(let i = 0;i<garden.length;i++) {
        if(garden[i] != 'rock') {
          ans += 'gravel '
           }else {ans += 'rock '}  
             }
             return ans.trim()
              }