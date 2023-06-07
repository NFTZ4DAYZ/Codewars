function mergeArrays(a, b) {
    let ans = [];
      let count = a.concat(b).length;
       for(let i = 0;i<count;i++) {
          if(i%2==0 && a.length || i%2 != 0 && !b.length) {
            ans.push(a[0])
              a = a.slice(1,a.length)
               }else if(i%2 != 0 && b.length || i%2 == 0 && !a.length) {
                ans.push(b[0])
                  b = b.slice(1,b.length)
                    } 
                     }
                       return ans
   
                        }