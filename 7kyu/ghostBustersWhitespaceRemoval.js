function ghostBusters(building) {
    let ans = ''
    for(let i = 0;i<building.length;i++) {
      if(building[i] != ' ') {
        ans+= building[i]
      }
    }
      return ans.length == building.length ?  "You just wanted my autograph didn't you?" : ans
    }