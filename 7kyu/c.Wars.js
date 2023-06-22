function initials(n){
    let ans = '';
      n = n.split(' ')
      for(let i= 0;i< n.length-1;i++) {
        ans+= n[i][0].toUpperCase() + '.'   
      }
      return ans + n[n.length -1][0].toUpperCase() + n[n.length -1].slice(1)
    }