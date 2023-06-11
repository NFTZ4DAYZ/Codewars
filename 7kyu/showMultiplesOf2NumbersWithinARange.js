function multiples(s1,s2,s3){
    let x = [];
      let s11 = s1;
        let s22 = s2;
           let count = 1;
            let count2 = 1;
              while(s11 < s3) {
               x.push(s1*count);
                count++;
                  s11+= s1
                    }; 
                    while(s22 < s3) {
                       x.push(s2*count2);
                         count2++;
                            s22+=s2;
                              };
                              return Array.from(new Set(x.filter(el=> x.indexOf(el) != x.lastIndexOf(el) ) ) );
                               }