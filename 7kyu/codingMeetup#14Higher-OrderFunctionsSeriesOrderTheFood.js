function orderFood(list) {
    let ans = {}
     for(let key of list) {
       let meal = key.meal
          if(!ans[meal]){
            ans[meal] = 1
              }else {
                ans[meal]++
                  }
                   }
                     return ans;
                    }