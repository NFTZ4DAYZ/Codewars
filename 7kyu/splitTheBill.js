function splitTheBill(x) {
    let y = 0;
      let z = 0;
       let result = {}
         for(let el in x) {
           y+= x[el]
             z++
            }
               y = y/z
                  for(let key in x) {
                    result[key] =  +(x[key] - y).toFixed(2)
                 }
                      return result
                     }