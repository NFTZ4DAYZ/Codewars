function isNice(arr){
    let ans = 0;
    for(let i = 0; i<arr.length;i++) {
      if(!(arr.includes(arr[i] + 1)|| arr.includes(arr[i] - 1))) {
         ans += 1
         }}
     if(!arr.length) {return false}
                     return ans ==0 ? true : false;
  }