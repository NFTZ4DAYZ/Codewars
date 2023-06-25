var isMonotone = function(arr){
    let ans = true;
     arr = arr.reverse()
     for(let i = 0;i<=arr.length;i++) {
      if(arr[i+1] > arr[i]) return false;
       
       }
     return ans;
   }