function WhatIsTheTime(m)
{          let time = m.split(':').map(Number);
              let res = [0,0];  
                   if(time[1]) {
                      res[1] = 60 - time[1];
                        }  
                        res[0] = 12 - time[0];
                           if(time[1] !== 0) {
                           res[0]--;
                              } 
                             if(res[0]<= 0) {
                              res[0] += 12;
                               } 
                                 return ('0' + res[0]).slice(-2) + ':' + ('0' + res[1]).slice(-2)
                                }