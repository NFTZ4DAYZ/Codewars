function solve(arr){
    let ans = [];
      let result = [];
        for(let i = 0;i<arr.length;i++) {
          if(arr[i] > Math.max(...arr.slice(i+1,arr.length))) ans.push(arr[i]) 
            }
            let obj = new Set(ans)
              return Array.from(obj)
                }