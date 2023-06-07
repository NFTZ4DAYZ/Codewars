function snail(column, day, night) {
    let count = column;
      let ans = 0;
       while(count>0) {
         count = count - day;
          if(count>0) ans++;
            count = count + night;    
             }
              return ans + 1;
                }