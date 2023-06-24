function rot(strng) {
    let ans = '';
     strng = strng.split('\n');
      for(let i = strng.length-1 ;i>=0;i--){
         ans += strng[i].split('').reverse().join('') + '\n';
           }
             return ans.trim();
             }
               function selfieAndRot(strng) {
                let help = rot(strng).split('\n');
                  let ans = '';
                    strng = strng.split('\n');
                      for(let i = 0;i<strng.length;i++) {
                         ans+= strng[i] + '.'.repeat(strng.length) + '\n';
                           }
                            ans = ans + '.'.repeat(strng.length);
                              for(let i = 0;i<strng.length;i++) {
                               ans+= help[i] + '\n' + '.'.repeat(strng.length);
                                 }
                                  return ans.slice(0,-strng.length).trim();
                                   }
                                    function oper(fct, s) {
                                      return fct(s);
                                       }