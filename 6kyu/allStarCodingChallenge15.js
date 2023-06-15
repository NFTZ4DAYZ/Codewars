function rotate(str){
    let ans = [];
      for(let i = 0;i<str.length;i++) {
        str = str.slice(1,str.length) + str.slice(0,1);
        ans.push(str);
      }
      return ans;
    }