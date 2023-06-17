function modifyMultiply (str,loc,num) {
    str = str.split(' ')
  let el = str[loc];
    let ans = '';
      for(let i = 0;i<num;i++) {    
        ans += el + '-';
         }
         return ans.slice(0,ans.length - 1)
          } 